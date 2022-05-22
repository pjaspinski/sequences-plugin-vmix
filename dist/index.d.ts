/// <reference types="node" />
import { Input, PluginTemplate, PluginSettings } from 'sequences-types';
import net from 'net';
declare class VMixPlugin extends PluginTemplate {
    name: string;
    settingsFields: Input[];
    socket: net.Socket;
    setup: (options: PluginSettings) => void;
    destroy: () => void;
}
export default VMixPlugin;
