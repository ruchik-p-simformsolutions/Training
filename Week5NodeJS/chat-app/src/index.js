const path = require('path');
const http = require('http');
const express = require('express');
const socket = require('socket.io');
const Filter = require('bad-words');
const { generateMessage, generateLocationMessage } = require('./utils/messages');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./utils/user');
// const { callbackify } = require('util');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT | 3000;

const io = socket(server);

const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));

io.on('connection', (socket) => {
    console.log('new websocket connection');

    socket.on('join', (options, callback) => {
        const { error, user } = addUser({ id: socket.id, ...options })

        if (error) {
            return callback(error);
        }

        socket.join(user.room);

        socket.emit('newUser', generateMessage('Welcome!!'));
        socket.broadcast.to(user.room).emit('msgforAll', generateMessage(`${user.username} has joined`));

        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getUsersInRoom(user.room),
        })
        callback();
    })


    socket.on('sendAll', (msg, callback) => {
        const user = getUser(socket.id);
        const filter = new Filter();
        if (filter.isProfane(msg)) {
            return callback('not delivered')
        }
        io.to(user.room).emit('msgforAll', generateMessage(user.username, msg));
        callback();
    })
    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('msgforAll', generateMessage(`a ${user.username} has left!!`))
            io.to(user.room).emit('roomData', {
                room: user.room,
                users: getUsersInRoom(user.room)
            })
        }

    })
    socket.on('sendLocation', (coords, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('locationMsg', generateLocationMessage(user.username, `http://google.com/maps?q=${coords.latitude},${coords.longitude}`))
        callback('location shared')
    })
});

server.listen(port, () => {
    console.log(`server is running at ${port}!`);
});