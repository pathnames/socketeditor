const express = require('express');
const port = 3000;
const app = express();
const socket = require('socket.io');

const server = app.listen(port, () => {
    console.log("Listening on port 3000!");
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//Socket setup
const io = socket(server);
io.on('connection', (socket) => {
    console.log('Made socket connection at id: ' + socket.id);
});
