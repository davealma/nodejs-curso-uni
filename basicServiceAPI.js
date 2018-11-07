var http = require('http');

const userLists = [
    {name: 'David', id: 1},
    {name: 'Jose', id: 2},
    {name: 'John', id: 3}
];
http.createServer(function (request, response) {
    switch (request.method) {
        case 'GET':
            response.writeHead(200);
            response.write(JSON.stringify(userLists));
            response.end();
            break;

        case 'POST':
            response.writeHead(200);
            response.write('user created');
            response.end();
            break;
    
        default:
            break;
    }
}).listen(8080);