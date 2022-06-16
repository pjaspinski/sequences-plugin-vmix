import { PluginTemplate, PluginStatus, } from 'sequences-types';
import net from 'net';
import settingsInputs from './settingsInputs.js';
import { capitalizeFirstLetter, parseInputsFromXML } from './utils.js';
import actions, { addInputsToActions } from './actions.js';
class vMixPlugin extends PluginTemplate {
    name = 'vMix';
    id = 0;
    settingsInputs = settingsInputs;
    actions = actions;
    socket;
    pollingInterval = 1000;
    pollingTimer = null;
    inputs = [];
    constructor() {
        super();
    }
    setup = (options) => {
        const { ip, port } = options;
        this.socket = new net.Socket();
        try {
            this.socket.connect(+port, ip, () => {
                // Setting up vMix API polling
                this.pollingTimer = setInterval(() => {
                    this.socket.write('XML\r\n', (error) => {
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
            this.socket.on('data', (data) => {
                // First message from vMix - confirms connection
                if (data.toString().startsWith('VERSION')) {
                    return;
                }
                // Polling response
                if (data.toString().startsWith('XML')) {
                    const splitData = data.toString().split(/\r?\n/);
                    if (splitData.length >= 2 && splitData[1])
                        this.inputs = parseInputsFromXML(splitData[1]);
                    if (this.getStatus() === PluginStatus.LOADING)
                        this.setStatus(PluginStatus.RUNNING);
                }
            });
        }
        catch (error) {
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
    handleAction = (action) => {
        const params = Object.entries(action.settings)
            .reduce((acc, [key, value]) => `${acc}${capitalizeFirstLetter(key)}=${value}&`, '')
            .slice(0, -1);
        const message = `FUNCTION ${action.name} ${params}\r\n`;
        console.log(message);
        this.socket.write(message, (error) => {
            if (error) {
                this.setStatus(PluginStatus.ERROR);
                this.destroy();
            }
        });
    };
}
export default vMixPlugin;
