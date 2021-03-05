const path=require('path');
const http=require('http');
const express=require('express');
const socket=require('socket.io');
const Filter=require('bad-words');
const { callbackify } = require('util');

const app=express();
const server=http.createServer(app);
const port=process.env.PORT|3000;

const io=socket(server);

const publicDirPath=path.join(__dirname,'../public');

app.use(express.static(publicDirPath));

let count=0;

io.on('connection',(socket)=>{
    console.log('new websocket connection');
    socket.emit('newUser',"welcome!!");
    socket.broadcast.emit('msgforAll','A new user has joined!!');
    socket.on('sendAll',(msg,callback)=>{
        const filter=new Filter();
        if(filter.isProfane(msg)){
            return callback('not delivered')
        }
        io.emit('msgforAll',msg);
        callback();
    })
    socket.on('disconnect',()=>{
        io.emit('msgforAll', 'a user has left!!')
    })
    socket.on('sendLocation',(coords,callback)=>{
        io.emit('msgforAll',`http://google.com/maps?q=${coords.latitude},${coords.longitude}`)
        callback('location shared')
    })
});

server.listen(port,()=>{
    console.log(`server is running at ${port}!`);
});
