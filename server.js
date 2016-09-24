var http = require('http');
var service = require('./service');
http.createServer(function(request, response) {
  // console.log('request', request);

  switch(request.method) {
     // GET
     case 'GET':
     service.getData(function (error, data) {
        var decoded = request.url.split('/').splice(1);
        var id = decoded[0];
        console.log(decoded, id);
        if (id) {
            service.show(id, function (error, data) {
                response.writeHead(200);
                response.write(JSON.stringify(data));
                response.end();
            });
        }else {
            response.writeHead(200);
            response.write(JSON.stringify(data));
            response.end();
        }

     });
     break;

     case 'PUT':
        var decoded = request.url.split('/').splice(1);
        var id = decoded[0];
        service.update(id, {name: 'User new', age: 30}, function (error, data) {
            if(data) {
                response.writeHead(200);
                response.write(JSON.stringify(data));
                response.end();
            }
        });
     break;


     case 'POST':
     var newUser = {id:4, name: 'User4', age: 24}
     service.create(newUser, function (error, data) {
        if (data) {
            response.writeHead(200);
            response.write(JSON.stringify(data));
            response.end();
        }
     });
     break;

     case 'DELETE':
        var decoded = request.url.split('/').splice(1);
        var id = decoded[0];
        service.destroy(id, function (error, data) {
            response.writeHead(200);
            response.write(JSON.stringify(data));
            response.end();
        });
     break;

     default:

  }

}).listen(8080);
