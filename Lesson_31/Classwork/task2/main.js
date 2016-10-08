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

    // подключение к базе данных
    //connection.connect(function(err) {
    //
    //    if (err) console.log(err.stack);
    //
    //    console.log('connected as id ' + connection.threadId);
    //});

    connection.query('SELECT * FROM `test_table`', function(err, rows, fields) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<table><thead><tr><td>ID</td><td>Name</td><td>Info</td></tr></thead><tbody>');

        for (var i = 0; i < rows.length; i++) {
            res.write(`
				<tr>
					<td>${rows[i].id}</td>
					<td>${rows[i].name}</td>
					<td>${rows[i].info}</td>
				</tr>
			`)
        };

        res.write('</tbody></table>');
        res.end();
    })
});


app.listen(port, function() {

    console.log('app listening on port ' + port);

});