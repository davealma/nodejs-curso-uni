var http = require('http');
var rt = require('random-token');

http.createServer(function(request, response) {
    if(request.method === 'POST') {
        response.writeHead(403);
        response.write('No puede entrar');
        response.end();
        return;
    }
    response.writeHead(200);
  //setTimeout( () => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hola!!!: " + rt(4));
    response.end();
  //}, 5000);

}).listen(8080);

console.log('Escuchando!!');
