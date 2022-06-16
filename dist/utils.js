import { XMLParser } from 'fast-xml-parser';
export const parseInputsFromXML = (xml) => {
    const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '',
    });
    const vMixObj = parser.parse(xml);
    const inputs = vMixObj?.vmix?.inputs?.input;
    if (inputs) {
        return inputs.map((input) => ({
            key: input.key,
            title: input.title,
            number: input.number,
        }));
    }
    return [];
};
export const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};
