// frontend.js
function Set()
{
    var content = document.getElementById("content");
    var input = document.getElementById("input"); 
    var status = document.getElementById("status"); 

    var myName = false;

	//***********************************************************
    window.WebSocket = window.WebSocket || window.MozWebSocket;

    if (!window.WebSocket) {    }

    //var connection = new WebSocket('ws://195.234.5.239:1337');
	var connection = new WebSocket('ws://localhost:1337');

    connection.onopen = function () {content.innerText='Connected...'; };

    connection.onerror = function (error) {    };

    //*************************************************************************
    connection.onmessage = function (message) {  
	    content.innerHTML += message.data;
        // try to parse JSON message. Because we know that the server always returns
        // JSON this should work without any problem but we should make sure that
        // the massage is not chunked or otherwise damaged.
        /*
		try {
            var json = JSON.parse(message.data);
        } catch (e) {
            console.log('This doesn\'t look like a valid JSON: ', message.data);
            return;
        };
		   
        // NOTE: if you're not sure about the JSON structure
        // check the server source code above
        if (json.type === 'color') { // first response from the server with user's color   node server.js
            myColor = json.data;
            status.text(myName + ': ').css('color', myColor);
            input.removeAttr('disabled').focus();
            // from now user can start sending messages
        } else if (json.type === 'history') { // entire message history
            // insert every single message to the chat window
            for (var i=0; i < json.data.length; i++) {
                addMessage(json.data[i].author, json.data[i].text,
                           json.data[i].color, new Date(json.data[i].time));
            }
  
        } else if (json.type === 'message') { // it's a single message
            input.removeAttr('disabled'); // let the user write another message
            addMessage(json.data.author, json.data.text,
                       json.data.color, new Date(json.data.time));

        } else {
            console.log('Hmm..., I\'ve never seen JSON like this: ', json);
        }
		*/
    };

    //*************************************************************************
    document.onkeydown=function(e) 
	{
        if (e.keyCode === 13) {
            var msg = input.value; 
            connection.send(msg);
			input.value = ''; 
        }
    };

    //*************************************************************************
    setInterval(function() {
        if (connection.readyState !== 1) {
            status.text('Error');
            input.attr('disabled', 'disabled').val('Unable to comminucate '
                                                 + 'with the WebSocket server.');
        }
    }, 5000);

    //*************************************************************************
    function addMessage(author, message, color, datetime) {
        content.innerHTML +='<p><span style="color:' + color + '">' + author + '</span> @ ' +
                      + (datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours()) + ':'
                      + (datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes())
                      + ': ' + message + '</p>';
    }
    
};
