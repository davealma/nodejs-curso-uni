var http = require('http');
var rt = require('random-token');
var port = 8989;

//servidor de archivos estaticos
var node_static = require("node-static");
var static_files = new node_static.Server(__dirname);

http.createServer(function(request, response) {
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

console.log('Escuchando en '+port);
