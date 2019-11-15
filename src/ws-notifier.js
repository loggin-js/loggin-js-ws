const loggin = require('loggin-js');
const socketio = require('socket.io');

/**
 * @param {Object} options
 * @param {http.Server} options.server - see [this](https://github.com/socketio/socket.io/blob/47161a65d40c2587535de750ac4c7d448e5842ba/docs/API.md#new-serverhttpserver-options)
 * @param {Number} options.port
 * @param {Number} options.port
 */
class WsNotifier extends loggin.Notifier {
    constructor(options = {}) {
        super({
            port: 3000,
            autostart: true,
            ...options
        });

        this.name = 'node-ui';
        this.server = this.options.server;
        this.port = this.options.port || 300;
        this.eventName = 'loggin-js:log';
        this.socket = this.server ? socketio(this.server) : socketio();

        this.clients = [];

        if (this.options.autostart) {
            this.startServer();
        }
    }

    startServer() {
        this.socket.on('connection', client => {
            console.log('Client', client.id);
            let clientIndex = this.clients.push(client);

            client.on('disconnect', () => {
                this.clients.splice(clientIndex, 1);
            });
        });

        if (this.server) {
            this.server.listen(this.port);
        } else {
            this.socket.listen(this.port);
        }
    }

    stopServer(cb) {
        if (this.server) {
            this.server.close();
        } else {
            this.socket.close();
        }
    }

    output(formattedLog, log) {
        this.clients.forEach((client) => {
            client.json.emit(this.eventName, { formattedLog, log });
        });
        return this;
    }
}

module.exports = WsNotifier;
