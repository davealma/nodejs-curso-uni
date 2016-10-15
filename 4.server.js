var http = require('http');
var io = require('socket.io');
function handleHTTP(req, res) {
  res.writeHead(200);
  res.write('Success');
  res.end();
}
var http_server = http.createServer(handleHTTP).listen(8181);
io.listen(http_server);
