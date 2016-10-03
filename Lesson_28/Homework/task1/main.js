/**
 * Created by IncWolf on 04.10.2016.
 */
'use strict';

var events = require('events');
var emitter = new events.EventEmitter;
var count = 0;
var listener = () => {
    console.log(`${count++}`);
};
emitter.on('error', (err) => {
    console.log(err);
});

emitter.on('tick', listener);
setInterval(function() {emitter.emit('tick')}, 1000);