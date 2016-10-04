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
server.listen(port, function() {
    console.log('server running on port ' + port);
    var postData =  'ТЕКСТ ТЕЛА ЗАПРОСА';
    var options = {
        host: 'localhost',
        port: port,
        method: 'POST',
        path: '/test',
        headers: { 'Content-Type': 'text/plain' }
    };
    var req = http.request(options, (res) => {

        console.log(`STATUS: ${res.statusCode}`);
        console.log(`${JSON.stringify(res.headers)}`);

        res.setEncoding('utf8');

        res.on('data', (chunk) => {
            console.log(`${JSON.stringify(chunk)}`);
        });

        res.on('end', () => {
            console.log('No more data in response.');
        });

    });

    req.write(postData); // запись данных в тело запроса
    req.end();
});