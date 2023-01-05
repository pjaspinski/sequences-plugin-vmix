"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeFirstLetter = exports.parseInputsFromXML = void 0;
const fast_xml_parser_1 = require("fast-xml-parser");
const parseInputsFromXML = (xml) => {
    var _a, _b;
    const parser = new fast_xml_parser_1.XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '',
    });
    const vMixObj = parser.parse(xml);
    const inputs = (_b = (_a = vMixObj === null || vMixObj === void 0 ? void 0 : vMixObj.vmix) === null || _a === void 0 ? void 0 : _a.inputs) === null || _b === void 0 ? void 0 : _b.input;
    if (inputs) {
        console.log(inputs);
        return inputs.map((input) => ({
            key: input.key,
            title: `${input.number} - ${input.title}`,
            number: input.number,
        }));
    }
    return [];
};
exports.parseInputsFromXML = parseInputsFromXML;
const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
