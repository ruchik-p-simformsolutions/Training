const path = require('path');
const http = require('http');
const express = require('express');
const socket = require('socket.io');
const Filter = require('bad-words');
const { generateMessage, generateLocationMessage } = require('./utils/messages');
// const { callbackify } = require('util');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT | 3000;

const io = socket(server);

const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));

io.on('connection', (socket) => {
    console.log('new websocket connection');
    socket.emit('newUser', generateMessage('Welcome!!'));
    socket.broadcast.emit('msgforAll', generateMessage('A new user has joined!!'));
    socket.on('sendAll', (msg, callback) => {
        const filter = new Filter();
        if (filter.isProfane(msg)) {
            return callback('not delivered')
        }
        io.emit('msgforAll', generateMessage(msg));
        callback();
    })
    socket.on('disconnect', () => {
        io.emit('msgforAll', generateMessage('a user has left!!'))
    })
    socket.on('sendLocation', (coords, callback) => {
        io.emit('locationMsg', generateLocationMessage(`http://google.com/maps?q=${coords.latitude},${coords.longitude}`))
        callback('location shared')
    })
});

server.listen(port, () => {
    console.log(`server is running at ${port}!`);
});