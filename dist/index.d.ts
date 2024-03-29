/// <reference types="node" />
import { PluginTemplate, PluginSettings, ActiveAction } from 'sequences-types';
import net from 'net';
import { vMixInput } from './types';
declare class vMixPlugin extends PluginTemplate {
    name: string;
    id: number;
    settingsInputs: import("sequences-types").Input[];
    actions: import("./types").vMixAction[];
    socket: net.Socket;
    pollingInterval: number;
    pollingTimer: NodeJS.Timer;
    inputs: vMixInput[];
    constructor();
    setup: (options: PluginSettings) => void;
    destroy: () => void;
    getActions: () => import("./types").vMixAction[];
    handleAction: (action: ActiveAction) => void;
}
export default vMixPlugin;
