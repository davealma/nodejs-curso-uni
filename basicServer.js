const http = require('http');
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        // Handle post info...
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            body = parse(body);
            console.log(body);
            res.end(`Parsed data belonging to ${body.name}`);
        });
    }
    else {
      res.end(`
        <!doctype html>
        <html>
        <body>
            <form action="/" method="post">
                <input placeholder="Nombre" type="text" name="name" /><br />
                <input placeholder="Edad" type="number" name="age" /><br />
                <button>Save</button>
            </form>
        </body>
        </html>
      `);
    }
});
server.listen(3000);