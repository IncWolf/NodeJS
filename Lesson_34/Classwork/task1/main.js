/**
 * Created by IncWolf on 09.10.2016.
 */
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path');

var port = process.env.port || 1337;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function (socket) {

    // метод send автоматически генерирует событие 'message'
    socket.send('Socket connected')

});

server.listen(port, function () {
    console.log('app running on port ' + port);
})