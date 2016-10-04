/**
 * Created by IncWolf on 05.10.2016.
 */
const http = require('http');
const port = process.env.port || 1337;

const server = http.createServer((req, res) => {

    console.log(` ${req.method} \n\r ${req.url} `);
});
server.listen(port, function() {
    console.log('server running on port ' + port);

    var options = {
        host: 'localhost',
        port: port,
        path: '/test'
    };
    var callback = function(response) {
        response.on('end', function () {
            console.log('Get-запрос к /test успешно выполнен');
        });
    };
    var req = http.request(options, callback);
    req.end();
});

