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

// выбрать все элементы
server.get('/users', apiHandler.getUsers);

// создать новый элемент
server.post('/users', apiHandler.postUsers);

server.put('/users/:index', apiHandler.updateUsers);

server.del('/users/:index', apiHandler.deleteUsers);

// обработчик ошибок
server.on('InternalServer', function(err) {
    err.body = 'oops...error';
    res.send(err);
});

server.listen(port, function () {
    console.log('server running on port ' + port);
});