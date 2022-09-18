import { DropdownInput } from 'sequences-types';
import { vMixAction } from '../types';

const mixes = ['1', '2', '3', '4'].map((mix) => ({
	text: mix,
	value: mix,
}));
const defaultMix = '1';
const mixesDropdownInput: DropdownInput = {
	type: 'DROPDOWN',
	value: defaultMix,
	placeholder: 'Mix',
	options: mixes,
	id: 'Bus',
	required: true,
	label: 'Audio bus',
};

const outputActions: vMixAction[] = [
	{
		id: 300,
		name: 'Fullscreen',
		settingsInputs: [],
		addInputField: false,
	},
	{
		id: 301,
		name: 'FullscreenOff',
		settingsInputs: [],
		addInputField: false,
	},
	{
		id: 302,
		name: 'FullscreenOn',
		settingsInputs: [],
		addInputField: false,
	},
	{
		id: 303,
		name: 'StartExternal',
		settingsInputs: [],
		addInputField: false,
	},
	{
		id: 304,
		name: 'StartMultiCorder',
		settingsInputs: [],
		addInputField: false,
	},
	{
		id: 305,
		name: 'StartRecording',
		settingsInputs: [],
		addInputField: false,
	},
	{
		id: 306,
		name: 'StartSRTOutput',
		settingsInputs: [
			{
				id: 'Value',
				type: 'NUMBER',
				label: 'Output',
				value: 0,
				required: false,
			},
		],
		addInputField: false,
	},
	{
		id: 307,
		name: 'StartStopExternal',
		settingsInputs: [],
		addInputField: false,
	},
	{
		id: 308,
		name: 'StartStopMultiCorder',
		settingsInputs: [],
		addInputField: false,
	},
	{
		id: 309,
		name: 'StartStopRecording',
		settingsInputs: [],
		addInputField: false,
	},
	{
		id: 310,
		name: 'StartStopSRTOutput',
		settingsInputs: [
			{
				id: 'Value',
				type: 'NUMBER',
				label: 'Output',
				value: 0,
				required: false,
			},
		],
		addInputField: false,
	},
	{
		id: 311,
		name: 'StartStopStreaming',
		settingsInputs: [
			{
				id: 'Value',
				type: 'NUMBER',
				label: 'Output',
				value: 0,
				required: false,
			},
		],
		addInputField: false,
	},
	{
		id: 312,
		name: 'StartStreaming',
		settingsInputs: [
			{
				id: 'Value',
				type: 'NUMBER',
				label: 'Output',
				value: 0,
				required: false,
			},
		],
		addInputField: false,
	},
	{
		id: 313,
		name: 'StopExternal',
		settingsInputs: [],
		addInputField: false,
	},
	{
		id: 314,
		name: 'StopMultiCorder',
		settingsInputs: [],
		addInputField: false,
	},
	{
		id: 315,
		name: 'StopRecording',
		settingsInputs: [],
		addInputField: false,
	},
	{
		id: 316,
		name: 'StopSRTOutput',
		settingsInputs: [
			{
				id: 'Value',
				type: 'NUMBER',
				label: 'Output',
				value: 0,
				required: false,
			},
		],
		addInputField: false,
	},
	{
		id: 317,
		name: 'StopStreaming',
		settingsInputs: [
			{
				id: 'Value',
				type: 'NUMBER',
				label: 'Output',
				value: 0,
				required: false,
			},
		],
		addInputField: false,
	},
];

export default outputActions;
