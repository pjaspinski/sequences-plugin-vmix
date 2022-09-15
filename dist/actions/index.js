import audioActions from './audio.js';
import transitionActions from './transition.js';
import outputActions from './output.js';
const actions = [...audioActions, ...transitionActions, ...outputActions];
export default actions;
export const addInputsToActions = (actions, inputs) => {
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
            ? { ...action, settingsInputs: [...action.settingsInputs, inputsField] }
            : action;
    });
};
