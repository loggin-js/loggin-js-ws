const io = require('socket.io')();
io.on('connection', client => {
    client.on('loggin-js:log', data => {
        console.log(data);
    });
});
io.listen(3000);