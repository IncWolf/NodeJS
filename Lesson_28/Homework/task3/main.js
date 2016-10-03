/**
 * Created by IncWolf on 04.10.2016.
 */
var fs = require("fs");
var readData ='';
// создать поток для чтения данных
var readerStream = fs.createReadStream('test.txt');
readerStream.setEncoding('UTF8');
readerStream.on('data', function (chunk) {
    var writerStream = fs.createWriteStream('output.txt');

    writerStream.write(chunk.slice(9,20).toString(), 'utf-8');

    writerStream.on('error', function(err) {
        console.log(err);
    });
});

readerStream.on('error', function (err) {
    console.log(err);
});
