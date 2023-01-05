import { XMLParser } from 'fast-xml-parser';
import { vMixInput } from './types';

export const parseInputsFromXML = (xml: string): vMixInput[] => {
	const parser = new XMLParser({
		ignoreAttributes: false,
		attributeNamePrefix: '',
	});
	let vMixObj: any;
	try {
		vMixObj = parser.parse(xml);
	} catch (e) {
		console.error('Failed to parse XML', e);
		return [];
	}
	const inputs = vMixObj?.vmix?.inputs?.input;
	if (inputs) {
		return inputs.map((input) => ({
			key: input.key,
			title: `${input.number} - ${input.title}`,
			number: input.number,
		}));
	}
	return [];
};

export const capitalizeFirstLetter = (text: string): string => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};
