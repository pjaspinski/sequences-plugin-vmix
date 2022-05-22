import { Input, PluginDefinition, PluginSettings, PluginStatus } from 'sequences-types';
import net from 'net';

const name = 'VMix';
const settingsFields: Input[] = [
	{
		type: 'TEXT',
		id: 'ip',
		required: true,
		value: '127.0.0.1',
		regex: '^[0-9]+.[0-9]+.[0-9]+.[0-9]+$',
		label: 'IP address',
	},
	{
		type: 'TEXT',
		id: 'port',
		required: true,
		value: '8099',
		regex: '^((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4}))$',
		label: "Port (fixed in VMix, so you probably don't want to change this)",
	},
];

const socket = new net.Socket();

const setup = (options: PluginSettings) => {
	const { ip, port } = options;

	socket.connect(+port, ip, () => console.log('Connected to a VMix instance'));
};

const destroy = () => {
	socket.end();
	socket.destroy();
};

const plugin: PluginDefinition = { name, settingsFields, setup, destroy };

export default plugin;
