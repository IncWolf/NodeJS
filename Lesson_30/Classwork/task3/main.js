/**
 * Created by IncWolf on 05.10.2016.
 */
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.port || 1337;

var url = require('url');
var app = express();

// middleware

// обработка GET запросов по пути '/test'
app.use('/test', express.static('page'));
app.use(bodyParser.urlencoded({ extended: true }));
// обработка POST запросов по пути '/test'
app.post('/test', function(req, res) {
    // чтение данных POST запроса
    var data = req.body.text;
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(data);
});


app.use(function (req, res, next) {
    res.send('<h1>Hello from express!</h1>');
    next();
});

app.use(function (req) {
    console.log(` ${req.method} \n\r ${req.url} `);
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
});