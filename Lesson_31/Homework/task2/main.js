/**
 * Created by IncWolf on 08.10.2016.
 */
/**
 * Created by IncWolf on 08.10.2016.
 */

var express  = require('express');
var app = express();

var mysql = require('mysql');

var port = process.env.port || 1337;


// соединения могут быть объединены для облегчения их многократного использования
// или использования больщого количесва соединений
var pool = mysql.createPool({
    connectionLimit: 1, // максимальное количество соединений, которые могут быть созданы одновременно
    queueLimit: 10, // максимальное разрешенное количество соединений в очереди обработки
    aquireTimeout: 5000, // максимальное время ожидания при установке соединения
    host: 'localhost', // имя хоста базы данных
    user: 'test', // MySQL пользователь, под именем которого авторизоваться
    password: 'q1w2e3r4', // пароль пользователя MySQL
    database: 'test', // имя базы данных
    port: 3306 // порт, на котором установлен MySQL сервер
});


app.get('/', function(req, res) {
    // создать соединение
    pool.getConnection(function(err, conn){

        if (err) {
            console.log(err.stack);
            return;
        }

        // использовать соединение
        conn.query('SELECT * FROM `test_table`', function(err, rows, fields) {
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
            conn.release();
        })

    });
});
app.listen(port, function() {

    console.log('app listening on port ' + port);

});