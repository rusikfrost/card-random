var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){

const arr = [{val: '-25', win: 'none' }, {val: '+33', win: 'yeah' }, {val: '-25', win: 'none' }];
function compareRandom(a, b) {
  return Math.random() - 0.5;
}
arr.sort(compareRandom);
console.log( arr.sort(compareRandom) );

socket.emit('chat message', arr.sort(compareRandom) )


	console.log('a user connected');
  socket.on('chat message', function(msg){
  	socket.emit('chat message', arr.sort(compareRandom) )
    console.log( msg );
  });


 socket.on('result', function(msg){
  	socket.emit('chat message', arr.sort(compareRandom) )
    console.log( msg );
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});









const arr = [{val: '-25', win: 'none' }, {val: '+33', win: 'yeah' }, {val: '-25', win: 'none' }];


function compareRandom(a, b) {
  return Math.random() - 0.5;
}

arr.sort(compareRandom);

console.log( arr.sort(compareRandom) );