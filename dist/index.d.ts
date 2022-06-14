/// <reference types="node" />
import { PluginTemplate, PluginSettings } from 'sequences-types';
import net from 'net';
import { vMixInput } from './types.js';
declare class vMixPlugin extends PluginTemplate {
    name: string;
    id: number;
    settingsInputs: import("sequences-types").Input[];
    actions: import("./types.js").vMixAction[];
    socket: net.Socket;
    pollingInterval: number;
    pollingTimer: NodeJS.Timer;
    inputs: vMixInput[];
    constructor();
    setup: (options: PluginSettings) => void;
    destroy: () => void;
    getActions: () => import("./types.js").vMixAction[];
}
export default vMixPlugin;
