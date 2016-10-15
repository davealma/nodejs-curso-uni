var http = require('http');
var rt = require('random-token');
var port = 8009;

//servidor de archivos estaticos
var node_static = require("node-static");
var static_files = new node_static.Server(__dirname);

function handleIO (socket) {
  function disconnect() {
    clearInterval(intv);
    console.log("Client disconnect");
  }

  console.log("Client connect");
  socket.on("disconnect", disconnect);

  socket.on("typeit", function(msg) {
      console.log('mesg', msg);
      socket.broadcast.emit('messages', msg);
      //io.boradcast to everybody including yourself
  });

  var intv = setInterval(function () {
    socket.emit('hello', Math.random());
  }, 1000);

}

var http_server = http.createServer(function(request, response) {
    if(request.method === 'POST') {
        response.writeHead(403);
        response.write('No puede entrar');
        response.end();
        return;
    }
    if (request.method === 'GET') {
      if (/^\/\d+(?=$|[\/?#])/.test(request.url)) {
	request.addListener("end", function() {
	  var file1 = request.url.substring(1);
	  var res = file1.concat(".html");
    console.log(res);
	  request.url = request.url.replace(/^\/(\d+).*$/, res);
	  static_files.serve(request, response);
	});
	request.resume();
      }
    }
}).listen(port);

var io = require('socket.io').listen(http_server);

io.on("connection", handleIO);

console.log('Escuchando en '+port);
