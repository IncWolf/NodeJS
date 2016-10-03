/**
 * Created by IncWolf on 03.10.2016.
 */
'use strict';

const buf = Buffer.alloc(100);
var str = '';
for(let i=0; i<buf.length; i++) {
    str += i.toString();
}
buf.write(str, 0);
var bufData = buf.toString('utf-8');
console.log(bufData);