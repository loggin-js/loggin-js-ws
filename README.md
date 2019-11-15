<!-- Links -->
[npm-image]: https://img.shields.io/npm/v/loggin-js-ws.svg?style=flat-square
[npm-url]: https://npmjs.org/package/loggin-js-ws

[travis-image]: https://img.shields.io/travis/nombrekeff/loggin-js-ws.svg?style=flat-square
[travis-url]: https://travis-ci.org/nombrekeff/loggin-js-ws

[code-quality-badge]: http://npm.packagequality.com/shield/loggin-js-ws.svg?style=flat-square
[code-quality-link]: https://packagequality.com/#?package=loggin-js-ws

[downloads-badge]: https://img.shields.io/npm/dt/loggin-js-ws.svg?style=flat-square
[downloads-link]: https://www.npmjs.com/package/loggin-js-ws

[dependencies-badge]: https://img.shields.io/david/nombrekeff/loggin-js-ws.svg?style=flat-square
[dependencies-link]: https://david-dm.org/nombrekeff/loggin-js-ws?view=tree

[vulnerabilities-badge]: https://snyk.io/test/npm/loggin-js-ws/badge.svg?style=flat-square
[vulnerabilities-link]: https://snyk.io/test/npm/loggin-js-ws

<div align="center">

# WebSocket plugin for [Loggin'JS](https://github.com/loggin-js/loggin-js) ![](https://img.shields.io/badge/PRs-welcome-green.svg) <!-- omit in toc -->

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-badge]][downloads-link]
[![Dependencies][dependencies-badge]][dependencies-link]
[![Known Vulnerabilities][vulnerabilities-badge]][vulnerabilities-link]  
[![NPM quality][code-quality-badge]][code-quality-link]  
  
<p>
A websocket client notifier for <a href="https://github.com/loggin-js/loggin-js">Loggin'JS<a>, powered by [socket.io](socket.io)
</p>
</div>

****

> ### !! NOTICE !!
> This plugin is still in it's early stages, and the API may change or have errors. 
> If you find any errors or have sugestions please create an [leave an issue](https://github.com/nombrekeff/loggin-js-ws/issues/new)


## Table Of Content <!-- omit in toc -->
- [Installing](#installing)
- [Importing](#importing)
- [Usage](#usage)
- [Found a bug?](#found-a-bug)
- [Collaborating](#collaborating)

### Installing
* Install with npm
```bash
npm install loggin-js-ws --save
```

### Importing
```javascript
// Require the logging library
const loggin = require('loggin-js');

// Require the express middleware
const loggingWS = require('loggin-js-ws');
```

### Usage
Easiest way of using the notifier is:
```javascript
// Register the plugin
loggin.use(logginWS);

// Get the ws notifier, prebuilt
let wsNotifier = loggin.notifier('ws');

// Create default logger
let logger = loggin.logger();

// Add wsNotifier to the logger
logger.notifier(wsNotifier);
```

Or you can also instantiate the notifier yourself:
```js
const loggingWS = require('loggin-js-ws');

const wsNotifier = new loggingWS.WsNotifier({ /* options */ });

logger.notifier(wsNotifier);
```

You can also pass in a set of **options**, (_in addition to the default Loggin'JS options_):
```javascript
let wsNotifier = loggin.notifier('ws', {
    url: 'https://localhost:3000',
    eventName: 'loggin-js:log',     // Event emitted by the ws client when a log is sent   
    socketioOptions: {}             // Options for socket.io, this plugin uses socket.io - https://github.com/socketio/socket.io-client/blob/master/docs/API.md#iourl-options
});
```

### Found a bug?
If you found a **bug** or like to leave a **feature request**, please [leave an issue](https://github.com/nombrekeff/loggin-js-ws/issues/new) and we will take care of it.
> Just make sure it's not already filed.


### Collaborating
Hi there, if you like the project don't hesitate in collaborating (_if you like to_), submit a pull request, post an issue, ...   
Any **help** or **ideas** are apreciated!
