import { DropdownInput } from 'sequences-types';
import { vMixAction, vMixInput } from '../types';
import audioActions from './audio';
import transitionActions from './transition';
import outputActions from './output';

const actions: vMixAction[] = [...audioActions, ...transitionActions, ...outputActions];

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
