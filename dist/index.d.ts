/// <reference types="node" />
import { Input, PluginTemplate, PluginSettings } from 'sequences-types';
import net from 'net';
declare class VMixPlugin extends PluginTemplate {
    name: string;
    settingsInputs: Input[];
    socket: net.Socket;
    constructor(id: number);
    setup: (options: PluginSettings) => void;
    destroy: () => void;
}
export default VMixPlugin;
