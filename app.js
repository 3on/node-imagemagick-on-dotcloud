var express = require('express');
var im = require('imagemagick');

var app = express();

app.get('*', function(req, res){
    im.readMetadata('eclipse.jpg', function(err, metadata){
        if (err) throw err;
        res.send(metadata.exif);
    })
});

app.listen(8080);