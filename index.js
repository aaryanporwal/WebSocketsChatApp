var express = require('express');
var socket = require('socket.io');
//app setup
var app = express();

var server = app.listen(4000,function(){
    console.log('listening to requests on http://localhost:4000');
});

// Static Files

app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection',function(socket){
    console.log("Made socket connection!", socket.id);
    //Handle Chat Event
    socket.on('chat',function(data){
        console.log(data);
        io.sockets.emit('chat',data);
    });
});