const express = require('express');
const socket = require('socket.io');
const app = express();

const server = app.listen(3000, () => {
    console.log('Listening on port 3000!');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//Static files
app.use(express.static('public'));

//Socket setup
io = socket(server);
io.on('connection', (socket) => {
    console.log("Socket connected at id: ", socket.id);

    socket.on('send', (data) => {
        socket.broadcast.emit('display', data.value);
    });
});