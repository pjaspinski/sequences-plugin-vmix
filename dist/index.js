import { PluginTemplate } from 'sequences-types';
import net from 'net';
class VMixPlugin extends PluginTemplate {
    name = 'VMix';
    settingsFields = [
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
    socket = new net.Socket();
    setup = (options) => {
        const { ip, port } = options;
        this.socket.connect(+port, ip, () => console.log('Connected to a VMix instance'));
    };
    destroy = () => {
        this.socket.end();
        this.socket.destroy();
    };
}
export default VMixPlugin;
