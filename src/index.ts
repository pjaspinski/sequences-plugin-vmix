import { PluginTemplate, PluginSettings, Action, ActiveAction } from 'sequences-types';
import net from 'net';
import settingsInputs from './settingsInputs';
import { vMixInput } from './types';
import { capitalizeFirstLetter, parseInputsFromXML } from './utils';
import actions, { addInputsToActions } from './actions/index';

class vMixPlugin extends PluginTemplate {
	name = 'vMix';
	id = 0;
	settingsInputs = settingsInputs;
	actions = actions;
	socket: net.Socket;
	pollingInterval = 5000;
	pollingTimer: NodeJS.Timer = null;
	inputs: vMixInput[] = [];

	constructor() {
		super();
	}

	setup = (options: PluginSettings) => {
		const { ip, port } = options;
		this.socket = new net.Socket();
		try {
			this.socket.connect(+port, ip, () => {
				// Setting up vMix API polling
				this.pollingTimer = setInterval(() => {
					this.socket.write('XML\r\n', (error: any) => {
						if (error) {
							this.setStatus('ERROR');
							this.destroy();
						}
					});
				}, this.pollingInterval);
			});

			this.socket.on('error', () => {
				this.setStatus('ERROR');
				this.destroy();
			});

			this.socket.on('data', (data: Buffer) => {
				// First message from vMix - confirms connection
				if (data.toString().startsWith('VERSION')) {
					return;
				}

				// Polling response
				if (data.toString().startsWith('XML')) {
					const splitData = data.toString().split(/\r?\n/);
					if (splitData.length >= 2 && splitData[1])
						this.inputs = parseInputsFromXML(splitData[1]);
					if (this.getStatus() === 'LOADING') this.setStatus('RUNNING');
				}
			});
		} catch (error) {
			this.setStatus('ERROR');
		}
	};

	destroy = () => {
		this.pollingTimer && clearInterval(this.pollingTimer);
		this.socket.end();
		this.socket.destroy();
	};

	getActions = () => {
		return addInputsToActions(this.actions, this.inputs);
	};

	handleAction = (action: ActiveAction) => {
		const params = Object.entries(action.settings)
			.reduce((acc, [key, value]) => `${acc}${capitalizeFirstLetter(key)}=${value}&`, '')
			.slice(0, -1);
		const message = `FUNCTION ${action.name} ${params}\r\n`;
		console.log(message);
		this.socket.write(message, (error: any) => {
			if (error) {
				this.setStatus('ERROR');
				this.destroy();
			}
		});
	};
}

export default vMixPlugin;
