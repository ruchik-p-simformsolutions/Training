const socket = io();
socket.on('newUser', (str) => {
    console.log(str);
})

const $messages = document.querySelector('#messages');
const $messageTemplate = document.querySelector('#message-template').innerHTML;
const $locationTemplate = document.querySelector('#location-template').innerHTML;
const sidebarTemplate = document.querySelector('#sidebar-template').innerHTML


const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true })

const autoscroll = () => {
    // New message element
    const $newMessage = $messages.lastElementChild

    // Height of the new message
    const newMessageStyles = getComputedStyle($newMessage)
    const newMessageMargin = parseInt(newMessageStyles.marginBottom)
    const newMessageHeight = $newMessage.offsetHeight + newMessageMargin

    // Visible height
    const visibleHeight = $messages.offsetHeight

    // Height of messages container
    const containerHeight = $messages.scrollHeight

    // How far have I scrolled?
    const scrollOffset = $messages.scrollTop + visibleHeight

    if (containerHeight - newMessageHeight <= scrollOffset) {
        $messages.scrollTop = $messages.scrollHeight
    }
}

socket.on('msgforAll', (message) => {
    console.log(message);
    const html = Mustache.render($messageTemplate, {
        username: message.username,
        message: message.text,
        createdAt: moment(message.createdAt).format('HH:mm:ss'),
    });
    $messages.insertAdjacentHTML("beforeend", html);
    autoscroll();
})

socket.on('locationMsg', (message) => {
    console.log(message.url);
    const html = Mustache.render($locationTemplate, {
        username: message.username,
        url: message.url,
        createdAt: moment(message.createdAt).format('HH:mm:ss'),
    })
    $messages.insertAdjacentHTML('beforeend', html);
    autoscroll();
})

socket.on('roomData', ({ room, users }) => {
    //
    const html = Mustache.render(sidebarTemplate, {
        room,
        users
    })
    document.querySelector('#sidebar').innerHTML = html
})

document.getElementById("messageform").addEventListener("submit", (e) => {;

    e.preventDefault()
    document.getElementById('msgSubButton').disabled = true;
    // var ms=document.getElementById('inp').value;
    var ms = e.target.elements.msg.value;
    socket.emit("sendAll", ms, (error) => {
        if (error) {
            return console.log(error);
        }
        console.log("msg delivered");
        document.getElementById('inp').value = '';
        document.getElementById('inp').focus();
        document.getElementById('msgSubButton').disabled = false;
    });

})


document.getElementById('sendLocation').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('no geolocation ');
    }
    document.getElementById('sendLocation').disabled = true;
    navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position.coords.latitude);
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        }, () => {
            console.log("location shared");
            document.getElementById('sendLocation').disabled = false;
        })
    })
})

socket.emit('join', { username, room }, (error) => {
    if (error) {
        alert(error);
        location.href = './'
    }
})