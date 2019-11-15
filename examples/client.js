const socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', () => {
    console.log('connected');
});
socket.on('event', (event) => {
    console.log('event', event);
}); 

socket.on('disconnect', () => {
    console.log('disconnected');
});