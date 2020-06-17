//Make connection
const socket = io.connect('http://localhost:3000');
const editor = document.getElementById('editor');

editor.addEventListener('keyup', (event) => {
    socket.emit('send', {
        value : editor.value
    });
});

socket.on('display', (data) => {
    editor.value = data;
});