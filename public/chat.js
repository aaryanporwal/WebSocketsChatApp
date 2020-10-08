//This is running on the frontend
// Make connection

var socket = io.connect("http://localhost:4000");

// Query DOM

var message = document.getElementById('message');
    handle = document.getElementById('handle'),
    send = document.getElementById('send'),
    output = document.getElementById('output');

//Emit Events

btn.addEventListener('click',function(){
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    });
});

//Listen for events
socket.on('chat',function(data){
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>' 
});