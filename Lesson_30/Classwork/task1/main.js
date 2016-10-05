/**
 * Created by IncWolf on 05.10.2016.
 */
var express = require('express');
var app = express();

var port = process.env.port || 1337;

// middleware
app.use(function (req, res) {
    res.send('<h1>Hello from express!</h1>');
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
});