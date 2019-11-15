const loggin = require('loggin-js');
const WsNotifier = require('./ws-notifier');

/**
 * @param {loggin} loggin 
 */
function plugin(loggin) {
    const { Notifier } = loggin;
    Notifier.register('ws', WsNotifier);
}

module.exports = plugin;
module.exports.WsNotifier = WsNotifier;