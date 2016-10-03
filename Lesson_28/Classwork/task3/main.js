/**
 * Created by IncWolf on 04.10.2016.
 */
var fs = require('fs');

fs.writeFile('file.txt', `${process.argv[2]}`, function(err) {
    if (err) {
        console.log(err)
    }
});