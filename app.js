var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

/*
function compareRandom(a, b) {
	return Math.random() - 0.5;
}

var randArr = arr[Math.floor(Math.random()*arr.length)];
var randRandArr = randArr[Math.floor(Math.random()*randArr.length)];
var randRandRandArr = randRandArr[Math.floor(Math.random()*randRandArr.length)];
//arr.sort(compareRandom);
//console.log( randRandRandArr );

socket.emit('chat message',  arr.sort() )
console.log('a user connected');

  socket.on('chat message', function(msg){

    console.log( msg );
  });

 socket.on('result', function(msg){

  	socket.emit('chat message',  arr.sort() )
    console.log( msg );
  });
});
*/


Math.floor(Math.random() * 3);

http.listen(3000, function(){
  console.log('listening on *:3000');
});


