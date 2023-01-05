"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addInputsToActions = void 0;
const audio_1 = __importDefault(require("./audio"));
const transition_1 = __importDefault(require("./transition"));
const output_1 = __importDefault(require("./output"));
const title_1 = __importDefault(require("./title"));
const actions = [
    ...audio_1.default,
    ...transition_1.default,
    ...output_1.default,
    ...title_1.default,
];
exports.default = actions;
const addInputsToActions = (actions, inputs) => {
    const inputsField = {
        id: 'input',
        type: 'DROPDOWN',
        label: 'Input',
        value: '',
        options: inputs.map((input) => ({ text: input.title, value: input.key })),
        required: true,
        placeholder: 'Select input',
    };
    return actions.map((action) => {
        return action.addInputField
            ? Object.assign(Object.assign({}, action), { settingsInputs: [...action.settingsInputs, inputsField] }) : action;
    });
};
exports.addInputsToActions = addInputsToActions;
