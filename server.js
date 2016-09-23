var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve('./build')));

app.listen(3030, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('listen to 3030');
});
