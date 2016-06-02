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

  var id = setInterval(function() 
  {
	  //ws.send('Привет, Витя ' + ws.upgradeReq.connection.remoteAddress + '/' + ws._socket.remoteAddress, function() {  })
	  write(text);
  }, 30000);
  

//***********************************************
wss.on("connection", function(ws) 
{
    ws.send(text);
	
    ws.on("close", function() {
     //clearInterval(id)
    })
  
  
    ws.on('message', function message(data) 
    {
      //console.log('Roundtrip time: ' + (Date.now() - parseInt(data)) + 'ms', flags);
	 text += data + '/';
	 ws.send(data);
	 //append(data);
    })

})


//***********************************************
 function write(mes)
 {
     fs.writeFile("data.txt", mes, function(err) {
     //if (err)
       //console.log("Ничего не вышло, и вот почему:", err);
     //else
       //console.log("Запись успешна. Все свободны.");
     });
 }
 
 //***********************************************
 function append(mes)
 {
	fs.appendFile('data.txt', mes + '/', 'utf8', function(){}); 
 }

 

 

