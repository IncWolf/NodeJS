/**
 * Created by IncWolf on 07.10.2016.
 */
var express = require('express');
var port = process.env.port || 1337;
var app = express();

app.use('*',express.static('public'));
app.listen(port, function () {
    console.log('App listening on port ' + port);
});