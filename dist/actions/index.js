import audioActions from './audio.js';
const actions = [
    {
        id: 0,
        name: 'Cut',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                required: true,
            },
        ],
        addInputField: true,
    },
    {
        id: 1,
        name: 'Fade',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                required: true,
            },
        ],
        addInputField: true,
    },
    {
        id: 2,
        name: 'OverlayInput1',
        settingsInputs: [],
        addInputField: true,
    },
    ...audioActions,
];
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
