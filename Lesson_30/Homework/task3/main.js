/**
 * Created by IncWolf on 07.10.2016.
 */
/**
 * Created by IncWolf on 07.10.2016.
 */
var express = require('express');
//var qs = require('qs');
var app = express();
var port = process.env.port || 1337;

// locals - локальные переменные приложения
app.locals.users = [
    { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
    { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
];

app.route('/users')
    .get(function(req, res) {
        res.writeHead(200, {'Content-Type':'text/html'});
        var data = '';
        for (var i=0; i<app.locals.users.length; i++) {
            data += '<li><a href="/users/'+i+'">'+app.locals.users[i].name+'</a></li>';
        }
        res.end('<ul>'+data+'</ul>');
    });

app.use('/users/:id', function (req, res, next) {
    next();
});

app.param('id', function(req, res){
    var text = 'Name: ' + app.locals.users[req.params.id].name+', age: '+app.locals.users[req.params.id].age;
    res.send(text);
});

app.use(function(err, req, res, next) {

    res.status(500).send('Server error');

    next(err.message);
});

app.listen(port, function() {
    console.log('app running on port ' + port);
});