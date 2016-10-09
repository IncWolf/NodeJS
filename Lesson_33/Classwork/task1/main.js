/**
 * Created by IncWolf on 09.10.2016.
 */
var restify = require('restify'),
    fs = require('fs');

var port = process.env.port || 1337;

// модуль для обработки запросов
var apiHandler = require('./api_handler');

// создание сервера
var server = restify.createServer({
    name: 'myApp'
});

server.use(function(req, res, next) {
    console.log(req.method + ' ' + req.url);
    next();
});

// выбрать все элементы
server.get('/test', apiHandler.getHeaders);

// создать новый элемент
server.post('/test', apiHandler.getBody);

// обработчик ошибок
server.on('InternalServer', function(err) {
    err.body = 'oops...error';
    res.send(err);
});

server.listen(port, function () {
    console.log('server running on port ' + port);
});