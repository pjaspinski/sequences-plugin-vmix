"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mixes = ['1', '2', '3', '4'].map((mix) => ({
    text: mix,
    value: mix,
}));
const defaultMix = '1';
const mixesDropdownInput = {
    type: 'DROPDOWN',
    value: defaultMix,
    placeholder: 'Mix',
    options: mixes,
    id: 'Bus',
    required: true,
    label: 'Audio bus',
};
const audioActions = [
    {
        id: 200,
        name: 'Fade',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 201,
        name: 'Zoom',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 202,
        name: 'Wipe',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 203,
        name: 'Slide',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 204,
        name: 'Fly',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 205,
        name: 'CrossZoom',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 206,
        name: 'FlyRotate',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 207,
        name: 'Cube',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 208,
        name: 'CubeZoom',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 209,
        name: 'VerticalWipe',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 210,
        name: 'VerticalSlide',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 211,
        name: 'Merge',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 212,
        name: 'WipeReverse',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 213,
        name: 'SlideReverse',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 214,
        name: 'VerticalWipeReverse',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 215,
        name: 'VerticalSlideReverse',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 216,
        name: 'BarnDoor',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 217,
        name: 'RollerDoor',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 218,
        name: 'Cut',
        settingsInputs: [
            {
                id: 'duration',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 200,
                min: 0,
                required: true,
            },
            mixesDropdownInput,
        ],
        addInputField: true,
    },
    {
        id: 219,
        name: 'CutDirect',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 220,
        name: 'FadeToBlack',
        settingsInputs: [],
        addInputField: false,
    },
    {
        id: 221,
        name: 'QuickPlay',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 222,
        name: 'SetFader',
        settingsInputs: [
            {
                id: 'Value',
                type: 'NUMBER',
                label: 'Position (0-255)',
                value: 0,
                min: 0,
                max: 255,
                required: true,
            },
        ],
        addInputField: false,
    },
    {
        id: 223,
        name: 'SetTransitionDuration1',
        settingsInputs: [
            {
                id: 'Value',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 0,
                min: 0,
                required: true,
            },
        ],
        addInputField: false,
    },
    {
        id: 224,
        name: 'SetTransitionDuration2',
        settingsInputs: [
            {
                id: 'Value',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 0,
                min: 0,
                required: true,
            },
        ],
        addInputField: false,
    },
    {
        id: 225,
        name: 'SetTransitionDuration3',
        settingsInputs: [
            {
                id: 'Value',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 0,
                min: 0,
                required: true,
            },
        ],
        addInputField: false,
    },
    {
        id: 226,
        name: 'SetTransitionDuration4',
        settingsInputs: [
            {
                id: 'Value',
                type: 'NUMBER',
                label: 'Duration (ms)',
                value: 0,
                min: 0,
                required: true,
            },
        ],
        addInputField: false,
    },
    {
        id: 227,
        name: 'SetTransitionEffect1',
        settingsInputs: [
            {
                id: 'Value',
                type: 'TEXT',
                label: 'Transition',
                value: '',
                required: true,
            },
        ],
        addInputField: false,
    },
    {
        id: 228,
        name: 'SetTransitionEffect2',
        settingsInputs: [
            {
                id: 'Value',
                type: 'TEXT',
                label: 'Transition',
                value: '',
                required: true,
            },
        ],
        addInputField: false,
    },
    {
        id: 229,
        name: 'SetTransitionEffect3',
        settingsInputs: [
            {
                id: 'Value',
                type: 'TEXT',
                label: 'Transition',
                value: '',
                required: true,
            },
        ],
        addInputField: false,
    },
    {
        id: 230,
        name: 'SetTransitionEffect4',
        settingsInputs: [
            {
                id: 'Value',
                type: 'TEXT',
                label: 'Transition',
                value: '',
                required: true,
            },
        ],
        addInputField: false,
    },
    {
        id: 231,
        name: 'Stinger1',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 232,
        name: 'Stinger2',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 233,
        name: 'Stinger3',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 234,
        name: 'Stinger4',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 235,
        name: 'Transition1',
        settingsInputs: [],
        addInputField: false,
    },
    {
        id: 236,
        name: 'Transition2',
        settingsInputs: [],
        addInputField: false,
    },
    {
        id: 237,
        name: 'Transition3',
        settingsInputs: [],
        addInputField: false,
    },
    {
        id: 238,
        name: 'Transition4',
        settingsInputs: [],
        addInputField: false,
    },
];
exports.default = audioActions;
