var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 5000

app.use(express.static(__dirname + "/"))

var server = http.createServer(app)
server.listen(port)

console.log("http server listening on %d", port)

var wss = new WebSocketServer({server: server})
console.log("websocket server created");

var text = 'm ';

var fs = require("fs");


server.on("connection", function()
{
	fs.readFile("message.txt", {encoding: 'utf-8'}, function(err, data)
	{
	   if (data) text = data.toString();
    });
})


wss.on("connection", function(ws) 
{
  console.log("websocket connection open")

  var id = setInterval(function() 
  {
	  //ws.send('Привет, Витя ' + ws.upgradeReq.connection.remoteAddress + '/' + ws._socket.remoteAddress, function() {  })
	  ws.send(text);
  }, 1000)
  

  ws.on("close", function() {
     console.log("websocket connection close")
     clearInterval(id)
     //fs.writeFile("close.txt", ws, function(err) {  });
  })
  
  
  ws.on('message', function message(data) 
  {
     //console.log('Roundtrip time: ' + (Date.now() - parseInt(data)) + 'ms', flags);
	 text += data + ' ';
	 ws.send(text);
	 
	 append(data);
  })

})


 function append(mes)
 {
	fs.appendFile('message.txt', mes + ' /', 'utf8', function(){}); 
 }

 
 function write(mes)
 {
     fs.writeFile("message.txt", mes, function(err) {
     if (err)
       console.log("Ничего не вышло, и вот почему:", err);
     else
       console.log("Запись успешна. Все свободны.");
     });
 }
 

