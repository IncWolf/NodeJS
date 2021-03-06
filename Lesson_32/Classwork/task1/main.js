/**
 * Created by IncWolf on 09.10.2016.
 */
var express = require('express');
var http = require('http');
var app = express();

var port = process.env.port || 1337;

// подключение модуля cookie-parser
var cookieParser = require('cookie-parser');

// cookieParser middleware
app.use(cookieParser('IncWolf\'s app'));

app.use(function (req, res) {
    //метод res.cookie позволяет созранять cookies с установленными параметрами
    res.cookie('cookie1', 'Hello', {
        // срок жизни cookie
        expires: new Date(Date.now() + 604800000),
        // делает cookie доступным только для сервера
        httpOnly: true,
        // создание cookie с подписью
        signed: true
    });

    // доступ к cookie через свойство req.cookies
    res.end(req.cookies.cookie1);

    console.log('Cookies: ', req.cookies)
});

app.listen(port, function () {
    console.log('app running on port ' + port);
});