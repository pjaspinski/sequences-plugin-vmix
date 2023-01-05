"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const titleActions = [
    {
        id: 400,
        name: 'AdjustCountdown',
        settingsInputs: [
            {
                id: 'Value',
                type: 'NUMBER',
                label: 'Seconds',
                value: 0,
                required: true,
            },
        ],
        addInputField: true,
    },
    {
        id: 401,
        name: 'ChangeCountdown',
        settingsInputs: [
            {
                id: 'Value',
                type: 'TEXT',
                label: 'Time (hh:mm:ss)',
                value: '',
                required: true,
            },
        ],
        addInputField: true,
    },
    {
        id: 402,
        name: 'NextTitlePreset',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 403,
        name: 'PauseCountdown',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 404,
        name: 'PauseRender',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 405,
        name: 'PreviousTitlePreset',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 406,
        name: 'ResumeRender',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 407,
        name: 'SelectTitlePreset',
        settingsInputs: [
            {
                id: 'Value',
                type: 'TEXT',
                label: 'Preset Index',
                value: '',
                required: true,
            },
        ],
        addInputField: true,
    },
    {
        id: 408,
        name: 'SetColor',
        settingsInputs: [
            {
                id: 'Value',
                type: 'TEXT',
                label: 'Color (HTML #xxxxxxxx format)',
                value: '',
                required: true,
            },
        ],
        addInputField: true,
    },
    {
        id: 409,
        name: 'SetCountdown',
        settingsInputs: [
            {
                id: 'Value',
                type: 'TEXT',
                label: 'Duration (hh:mm:ss)',
                value: '',
                required: true,
            },
        ],
        addInputField: true,
    },
    {
        id: 410,
        name: 'SetImage',
        settingsInputs: [
            {
                id: 'Value',
                type: 'TEXT',
                label: 'Filename',
                value: '',
                required: true,
            },
        ],
        addInputField: true,
    },
    {
        id: 411,
        name: 'SetImageVisible',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 412,
        name: 'SetImageVisibleOff',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 413,
        name: 'SetImageVisibleOn',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 414,
        name: 'SetText',
        settingsInputs: [
            {
                id: 'Value',
                type: 'TEXT',
                label: 'Text',
                value: '',
                required: false,
            },
        ],
        addInputField: true,
    },
    {
        id: 415,
        name: 'SetTextColour',
        settingsInputs: [
            {
                id: 'Value',
                type: 'TEXT',
                label: 'Color (HTML #xxxxxxxx format)',
                value: '',
                required: true,
            },
        ],
        addInputField: true,
    },
    {
        id: 416,
        name: 'SetTextVisibleOff',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 417,
        name: 'SetTextVisibleOn',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 418,
        name: 'SetTickerSpeed',
        settingsInputs: [
            {
                id: 'Value',
                type: 'NUMBER',
                label: 'Speed [0-1000]',
                min: 0,
                max: 1000,
                value: 0,
                required: true,
            },
        ],
        addInputField: true,
    },
    {
        id: 419,
        name: 'StartCountdown',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 420,
        name: 'StopCountdown',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 421,
        name: 'SuspendCountdown',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 422,
        name: 'TitleBeginAnimation',
        settingsInputs: [
            {
                id: 'Value',
                type: 'TEXT',
                label: 'Animation',
                value: '',
                required: true,
            },
        ],
        addInputField: true,
    },
];
exports.default = titleActions;
