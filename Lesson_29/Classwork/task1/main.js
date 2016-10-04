/**
 * Created by IncWolf on 04.10.2016.
 */
const http = require('http');
const port = process.env.port || 1337;

const server = http.createServer((req, res) => {

    console.log(` ${req.method} \n\r ${req.url} `);
});
server.listen(port);
console.log('server running on port ' + port);