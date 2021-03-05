const socket=io();  
// socket.on('newUser',(str)=>{
//     console.log(str);
// })


socket.on('msgforAll',(message)=>{
    console.log(message);
})

document.getElementById("messageform").addEventListener("submit", (e)=>{;

    e.preventDefault()
    // var ms=document.getElementById('inp').value;
    var ms=e.target.elements.msg.value;    
    socket.emit("sendAll",ms,(error)=>{
        if(error){
            return console.log(error);
        }
        console.log("msg delivered");
    });

})


document.getElementById('sendLocation').addEventListener('click',()=>{
    if(!navigator.geolocation){
        return alert('no geolocation ');
    }
    navigator.geolocation.getCurrentPosition((position)=>{
        // console.log(position.coords.latitude);
        socket.emit('sendLocation',{
            latitude:position.coords.latitude,
            longitude:position.coords.longitude,
        },()=>{
            console.log("location shared");
        })
    })
})