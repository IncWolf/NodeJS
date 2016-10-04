/**
 * Created by IncWolf on 05.10.2016.
 */
const http = require('http');
var fs = require('fs');
const port = process.env.port || 1337;
var i = 1;
const server = http.createServer((req, res) => {

    var headers = req.headers;

    var writeData = '';
    for (var prop in headers) {
        writeData += `${prop}: ${headers[prop]}\n`
    }

    var writerStream = fs.createWriteStream(`${i}.txt`);

    writerStream.write(writeData, 'utf-8');

    writerStream.end();

    res.end();
    i++;
});
server.listen(port);