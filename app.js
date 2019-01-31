var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/eu_io_ua_md', function(req, res){
  res.sendFile(__dirname + '/i.html');
  console.log('eu_io_ua_md')
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

io.on('connection', function(socket){
	socket.on('click', function(msg){
		var x = getRndInteger(0,3)
		if ( msg === x ) {
			console.log('yeah');
			socket.emit('result', true )
		} else {
			console.log('nono');
			socket.emit('result', false )
		}  

  	});

});
http.listen(3000, function(){
  console.log('listening on *:3000');
});
