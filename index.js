var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 5000
port = 5000

app.use(express.static(__dirname + "/"))

var server = http.createServer(app)
server.listen(port)

console.log("http server listening on %d", port)

var wss = new WebSocketServer({server: server})
console.log("websocket server created");

var text = 'm ';


wss.on("connection", function(ws) 
{
	
  var id = setInterval(function() 
  {
	 //ws.send('Привет, Витя ' + ws.upgradeReq.connection.remoteAddress + '/' + ws._socket.remoteAddress, function() {  })
	   ws.send(text);
  }, 1000)
  

  console.log("websocket connection open")

  ws.on("close", function() {
    console.log("websocket connection close")
    clearInterval(id)
  })
  
  
  ws.on('message', function message(data) 
  {
     //console.log('Roundtrip time: ' + (Date.now() - parseInt(data)) + 'ms', flags);
	 text += data + ' ';
	 ws.send(text);
  })
  
 
})



/*
//************************************************
var fs = require("fs");
fs.writeFile("graffiti.txt", "Здесь был Node ", function(err) {
  if (err)
    console.log("Ничего не вышло, и вот почему:", err);
  else
    console.log("Запись успешна. Все свободны.");
});
*/
