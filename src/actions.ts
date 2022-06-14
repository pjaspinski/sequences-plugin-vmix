import { Action, DropdownInput } from 'sequences-types';
import { vMixAction, vMixInput } from './types';

const actions: vMixAction[] = [
	{
		name: 'Cut',
		settingsInputs: [
			{
				id: 'input',
				type: 'DROPDOWN',
				label: 'Input',
				value: '',
				options: [],
				required: true,
			},
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
	// {
	// 	name: 'Fade',
	// 	settingsInputs: [],
	// },
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
	};
	return actions.map<vMixAction>((action) => {
		return action.addInputField
			? { ...action, settingsInputs: [...action.settingsInputs, inputsField] }
			: action;
	});
};
