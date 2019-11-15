const WsNotifier = require('../src/ws-notifier');
const loggin = require('loggin-js');

async function main() {
    let notifier = new WsNotifier({ autostart: false });
    await notifier.startServer();

    let logger = loggin.logger({
        notifiers: [notifier]
    });

    setTimeout(() => {
        setInterval(() => {
            logger.debug('Test');
        }, 3000);
    }, 10000);
}
main();