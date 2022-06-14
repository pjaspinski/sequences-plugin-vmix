import { PluginTemplate, PluginSettings, PluginStatus, Action } from 'sequences-types';
import net from 'net';
import settingsInputs from './settingsInputs.js';
import { vMixInput } from './types.js';
import { parseInputsFromXML } from './utils.js';
import actions, { addInputsToActions } from './actions.js';

class vMixPlugin extends PluginTemplate {
	name = 'vMix';
	id = 0;
	settingsInputs = settingsInputs;
	actions = actions;
	socket: net.Socket;
	pollingInterval = 1000;
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
							this.setStatus(PluginStatus.ERROR);
							this.destroy();
						}
					});
				}, this.pollingInterval);
			});

			this.socket.on('error', () => {
				this.setStatus(PluginStatus.ERROR);
				this.destroy();
			});

			this.socket.on('data', (data: Buffer) => {
				// First message from vMix - confirms connection
				if (data.toString().startsWith('VERSION')) {
					this.setStatus(PluginStatus.RUNNING);
					return;
				}

				// Polling response
				if (data.toString().startsWith('XML')) {
					const splitData = data.toString().split(/\r?\n/);
					this.inputs = splitData.length >= 2 ? parseInputsFromXML(splitData[1]) : [];
				}
			});
		} catch (error) {
			this.setStatus(PluginStatus.ERROR);
		}
	};

	destroy = () => {
		clearInterval(this.pollingTimer);
		this.socket.end();
		this.socket.destroy();
	};

	getActions = () => {
		return addInputsToActions(this.actions, this.inputs);
	};
}

export default vMixPlugin;
