const logginWS = require('..');
const loggin = require('loggin-js');
loggin.use(logginWS);


async function main() {
    let ws = loggin.notifier('ws');
    let csol = loggin.notifier('csol');

    let logger = loggin.logger({
        notifiers: [ws, csol]
    });
    logger.error('An error', new Error('Something'));

    setTimeout(() => {
        setInterval(() => {
            logger.debug('Test');
        }, 3000);
    }, 10000);
}
main();