const audioBuses = ['M', 'A', 'B', 'C', 'D', 'E', 'F', 'G'].map((bus) => ({
    text: bus,
    value: bus,
}));
const defaultBus = 'M';
const busesDropdownInput = {
    type: 'DROPDOWN',
    value: defaultBus,
    placeholder: 'Audio bus',
    options: audioBuses,
    id: 'Bus',
    required: true,
    label: 'Audio bus',
};
const audioActions = [
    {
        id: 100,
        name: 'Audio',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 101,
        name: 'AudioAuto',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 102,
        name: 'AudioAutoOff',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 103,
        name: 'AudioAutoOn',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 104,
        name: 'AudioBus',
        settingsInputs: [busesDropdownInput],
        addInputField: true,
    },
    {
        id: 105,
        name: 'AudioBusOff',
        settingsInputs: [busesDropdownInput],
        addInputField: true,
    },
    {
        id: 106,
        name: 'AudioBusOn',
        settingsInputs: [busesDropdownInput],
        addInputField: true,
    },
    {
        id: 107,
        name: 'AudioOff',
        settingsInputs: [busesDropdownInput],
        addInputField: true,
    },
    {
        id: 108,
        name: 'AudioOn',
        settingsInputs: [busesDropdownInput],
        addInputField: true,
    },
    {
        id: 109,
        name: 'BusXAudio',
        settingsInputs: [busesDropdownInput],
        addInputField: false,
    },
    {
        id: 110,
        name: 'BusXAudioOff',
        settingsInputs: [busesDropdownInput],
        addInputField: false,
    },
    {
        id: 111,
        name: 'BusXAudioOn',
        settingsInputs: [busesDropdownInput],
        addInputField: false,
    },
    {
        id: 112,
        name: 'BusXSendToMaster',
        settingsInputs: [busesDropdownInput],
        addInputField: false,
    },
    {
        id: 113,
        name: 'BusXSendToMasterOff',
        settingsInputs: [busesDropdownInput],
        addInputField: false,
    },
    {
        id: 114,
        name: 'BusXSendToMasterOn',
        settingsInputs: [busesDropdownInput],
        addInputField: false,
    },
    {
        id: 115,
        name: 'BusXSolo',
        settingsInputs: [busesDropdownInput],
        addInputField: false,
    },
    {
        id: 116,
        name: 'BusXSoloOff',
        settingsInputs: [busesDropdownInput],
        addInputField: false,
    },
    {
        id: 117,
        name: 'BusXSoloOn',
        settingsInputs: [busesDropdownInput],
        addInputField: false,
    },
    {
        id: 118,
        name: 'MasterAudio',
        settingsInputs: [],
        addInputField: false,
    },
    {
        id: 119,
        name: 'MasterAudioOff',
        settingsInputs: [],
        addInputField: false,
    },
    {
        id: 120,
        name: 'MasterAudioOn',
        settingsInputs: [],
        addInputField: false,
    },
    {
        id: 121,
        name: 'SetBalance',
        settingsInputs: [
            {
                type: 'NUMBER',
                value: 0,
                min: -1,
                max: 1,
                id: 'Value',
                required: true,
                label: 'Balance [-1, 1]',
            },
        ],
        addInputField: true,
    },
    {
        id: 122,
        name: 'SetBusAVolume',
        settingsInputs: [
            {
                type: 'NUMBER',
                value: 100,
                min: 0,
                max: 100,
                id: 'Value',
                required: true,
                label: 'Volume [0, 100]',
            },
        ],
        addInputField: false,
    },
    {
        id: 123,
        name: 'SetBusBVolume',
        settingsInputs: [
            {
                type: 'NUMBER',
                value: 100,
                min: 0,
                max: 100,
                id: 'Value',
                required: true,
                label: 'Volume [0, 100]',
            },
        ],
        addInputField: false,
    },
    {
        id: 124,
        name: 'SetBusCVolume',
        settingsInputs: [
            {
                type: 'NUMBER',
                value: 100,
                min: 0,
                max: 100,
                id: 'Value',
                required: true,
                label: 'Volume [0, 100]',
            },
        ],
        addInputField: false,
    },
    {
        id: 125,
        name: 'SetBusDVolume',
        settingsInputs: [
            {
                type: 'NUMBER',
                value: 100,
                min: 0,
                max: 100,
                id: 'Value',
                required: true,
                label: 'Volume [0, 100]',
            },
        ],
        addInputField: false,
    },
    {
        id: 126,
        name: 'SetBusEVolume',
        settingsInputs: [
            {
                type: 'NUMBER',
                value: 100,
                min: 0,
                max: 100,
                id: 'Value',
                required: true,
                label: 'Volume [0, 100]',
            },
        ],
        addInputField: false,
    },
    {
        id: 127,
        name: 'SetBusFVolume',
        settingsInputs: [
            {
                type: 'NUMBER',
                value: 100,
                min: 0,
                max: 100,
                id: 'Value',
                required: true,
                label: 'Volume [0, 100]',
            },
        ],
        addInputField: false,
    },
    {
        id: 128,
        name: 'SetBusGVolume',
        settingsInputs: [
            {
                type: 'NUMBER',
                value: 100,
                min: 0,
                max: 100,
                id: 'Value',
                required: true,
                label: 'Volume [0, 100]',
            },
        ],
        addInputField: false,
    },
    {
        id: 129,
        name: 'SetGain',
        settingsInputs: [
            {
                type: 'NUMBER',
                value: 0,
                min: 0,
                max: 24,
                id: 'Value',
                required: true,
                label: 'Gain dB [0, 24]',
            },
        ],
        addInputField: true,
    },
    {
        id: 130,
        name: 'SetGainChannel1',
        settingsInputs: [
            {
                type: 'NUMBER',
                value: 0,
                min: 0,
                max: 24,
                id: 'Value',
                required: true,
                label: 'Gain dB [0, 24]',
            },
        ],
        addInputField: true,
    },
    {
        id: 131,
        name: 'SetGainChannel2',
        settingsInputs: [
            {
                type: 'NUMBER',
                value: 0,
                min: 0,
                max: 24,
                id: 'Value',
                required: true,
                label: 'Gain dB [0, 24]',
            },
        ],
        addInputField: true,
    },
    {
        id: 132,
        name: 'SetMasterVolume',
        settingsInputs: [
            {
                type: 'NUMBER',
                value: 100,
                min: 0,
                max: 100,
                id: 'Value',
                required: true,
                label: 'Volume [0, 100]',
            },
        ],
        addInputField: false,
    },
    {
        id: 133,
        name: 'SetVolume',
        settingsInputs: [
            {
                type: 'NUMBER',
                value: 100,
                min: 0,
                max: 100,
                id: 'Value',
                required: true,
                label: 'Volume [0, 100]',
            },
        ],
        addInputField: true,
    },
    {
        id: 134,
        name: 'SetVolumeChannel1',
        settingsInputs: [
            {
                type: 'NUMBER',
                value: 100,
                min: 0,
                max: 100,
                id: 'Value',
                required: true,
                label: 'Volume [0, 100]',
            },
        ],
        addInputField: true,
    },
    {
        id: 135,
        name: 'SetVolumeChannel2',
        settingsInputs: [
            {
                type: 'NUMBER',
                value: 100,
                min: 0,
                max: 100,
                id: 'Value',
                required: true,
                label: 'Volume [0, 100]',
            },
        ],
        addInputField: true,
    },
    {
        id: 136,
        name: 'SetVolumeFade',
        settingsInputs: [
            {
                type: 'TEXT',
                value: '100,100',
                id: 'Value',
                required: true,
                label: 'Volume [0, 100], duration (ms)',
            },
        ],
        addInputField: true,
    },
    {
        id: 137,
        name: 'Solo',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 138,
        name: 'SoloOff',
        settingsInputs: [],
        addInputField: true,
    },
    {
        id: 139,
        name: 'SoloOn',
        settingsInputs: [],
        addInputField: true,
    },
];
export default audioActions;
