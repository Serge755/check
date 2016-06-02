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

var fs = require("fs");
var text = '';
	fs.readFile("data.txt", {encoding: 'utf-8'}, function(err, data)
	{
	   if (data) text = data.toString();
    });



wss.on("connection", function(ws) 
{
  console.log("websocket connection open")

  
  ws.send(ws.upgradeReq.connection.remoteAddress + text);
  
 
  var id = setInterval(function() 
  {
	  //ws.send('Привет, Витя ' + ws.upgradeReq.connection.remoteAddress + '/' + ws._socket.remoteAddress, function() {  })
	  //ws.send(text);
  }, 1000)
  
  /* */

  ws.on("close", function() {
     console.log("websocket connection close")
     //clearInterval(id)
     //fs.writeFile("close.txt", ws, function(err) {  });
  })
  
  
  ws.on('message', function message(data) 
  {
     //console.log('Roundtrip time: ' + (Date.now() - parseInt(data)) + 'ms', flags);
	 text += data + '/';
	 ws.send(text);
	 
	 append(data);
  })

})


 function append(mes)
 {
	fs.appendFile('data.txt', mes + '/', 'utf8', function(){}); 
 }

 
 function write(mes)
 {
     fs.writeFile("data.txt", mes, function(err) {
     //if (err)
       //console.log("Ничего не вышло, и вот почему:", err);
     //else
       //console.log("Запись успешна. Все свободны.");
     });
 }
 

