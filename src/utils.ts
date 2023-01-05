import { XMLParser } from 'fast-xml-parser';
import { vMixInput } from './types';

export const parseInputsFromXML = (xml: string): vMixInput[] => {
	const parser = new XMLParser({
		ignoreAttributes: false,
		attributeNamePrefix: '',
	});
	const vMixObj = parser.parse(xml);
	const inputs = vMixObj?.vmix?.inputs?.input;
	if (inputs) {
		console.log(inputs);
		return inputs.map((input) => ({
			key: input.key,
			title: input.title,
			number: input.number,
		}));
	}
	return [];
};

export const capitalizeFirstLetter = (text: string): string => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};
