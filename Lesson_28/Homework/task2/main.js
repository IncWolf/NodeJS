/**
 * Created by IncWolf on 04.10.2016.
 */
var fs = require('fs');

fs.open('test.txt', 'r', function (err, fd) {
    if (err) {
        console.log(err);
    }
    else {
        var arr = new Uint8Array(6);
        var buf = Buffer.from(arr.buffer);

        fs.read(fd, buf, 0, buf.length, 9, function (err, bytes) {

            if (err) throw err;

            console.log(bytes);
            console.log(buf.slice(0, bytes).toString());

        });

        fs.close(fd, function (err) {
            if (err) throw err;
            console.log('file closed!');
        })
    }
});