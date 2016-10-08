/**
 * Created by IncWolf on 08.10.2016.
 */

var express  = require('express');
var app = express();

var port = process.env.port || 1337;

var mysql = require('mysql');

// параметры соединеня с бд
var connection = mysql.createConnection({
    host: 'localhost', // имя хоста базы данных
    user: 'test', // MySQL пользователь, под именем которого авторизоваться
    password: 'q1w2e3r4', // пароль пользователя MySQL
    database: 'test', // имя базы данных
    port: 3306 // порт, на котором установлен MySQL сервер
});

app.use(function(req, res) {

    var newItem = {
        name: 'Another item!',
        info: 'some data to be stored'
    };

    var sql = 'INSERT INTO `test_table` (name, info) VALUES (?, ?)';

    connection.query(sql, [newItem.name, newItem.info], function(err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('data inserted!');
    })
});


app.listen(port, function() {

    console.log('app listening on port ' + port);

});