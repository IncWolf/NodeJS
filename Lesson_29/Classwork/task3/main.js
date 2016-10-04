/**
 * Created by IncWolf on 05.10.2016.
 */
const http = require('http');
const port = process.env.port || 1337;

const server = http.createServer((req, res) => {

    console.log(` ${req.method} \n\r ${req.url} `);

    if (req.url == '/test') {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(JSON.stringify('{"message": "Hello World!"}'));
        res.end();
    }
});
server.listen(port, function() {
    console.log('server running on port ' + port);

    var options = {
        host: 'localhost',
        port: port,
        path: '/test'
    };
    var req = http.request(options);
    req.end();
});

