"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequences_types_1 = require("sequences-types");
const net_1 = __importDefault(require("net"));
const settingsInputs_1 = __importDefault(require("./settingsInputs"));
const utils_1 = require("./utils");
const index_1 = __importStar(require("./actions/index"));
class vMixPlugin extends sequences_types_1.PluginTemplate {
    constructor() {
        super();
        this.name = 'vMix';
        this.id = 0;
        this.settingsInputs = settingsInputs_1.default;
        this.actions = index_1.default;
        this.pollingInterval = 5000;
        this.pollingTimer = null;
        this.inputs = [];
        this.setup = (options) => {
            const { ip, port } = options;
            this.socket = new net_1.default.Socket();
            try {
                this.socket.connect(+port, ip, () => {
                    // Setting up vMix API polling
                    this.pollingTimer = setInterval(() => {
                        this.socket.write('XML\r\n', (error) => {
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
                this.socket.on('data', (data) => {
                    // First message from vMix - confirms connection
                    if (data.toString().startsWith('VERSION')) {
                        return;
                    }
                    // Polling response
                    if (data.toString().startsWith('XML')) {
                        console.log('---');
                        console.log(data.toString());
                        const splitData = data.toString().split(/\r?\n/);
                        if (splitData.length >= 2 && splitData[1])
                            this.inputs = (0, utils_1.parseInputsFromXML)(splitData[1]);
                        if (this.getStatus() === 'LOADING')
                            this.setStatus('RUNNING');
                    }
                });
            }
            catch (error) {
                this.setStatus('ERROR');
            }
        };
        this.destroy = () => {
            this.pollingTimer && clearInterval(this.pollingTimer);
            this.socket.end();
            this.socket.destroy();
        };
        this.getActions = () => {
            return (0, index_1.addInputsToActions)(this.actions, this.inputs);
        };
        this.handleAction = (action) => {
            const params = Object.entries(action.settings)
                .reduce((acc, [key, value]) => `${acc}${(0, utils_1.capitalizeFirstLetter)(key)}=${value}&`, '')
                .slice(0, -1);
            const message = `FUNCTION ${action.name} ${params}\r\n`;
            console.log(message);
            this.socket.write(message, (error) => {
                if (error) {
                    this.setStatus('ERROR');
                    this.destroy();
                }
            });
        };
    }
}
exports.default = vMixPlugin;
