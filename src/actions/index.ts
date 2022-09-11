import { Action, DropdownInput } from 'sequences-types';
import { vMixAction, vMixInput } from '../types.js';
import audioActions from './audio.js';

const actions: vMixAction[] = [
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

export const addInputsToActions = (actions: vMixAction[], inputs: vMixInput[]): vMixAction[] => {
	const inputsField: DropdownInput = {
		id: 'input',
		type: 'DROPDOWN',
		label: 'Input',
		value: '',
		options: inputs.map((input) => ({ text: input.title, value: input.key })),
		required: true,
		placeholder: 'Select input',
	};
	return actions.map<vMixAction>((action) => {
		return action.addInputField
			? { ...action, settingsInputs: [...action.settingsInputs, inputsField] }
			: action;
	});
};
