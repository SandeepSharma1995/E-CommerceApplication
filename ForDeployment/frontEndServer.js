const express = require('express');
const http  = require('http');
const path = require('path');

const app = express();
const dateNow=(new Date()).toUTCString()
app.use(function(req, res, next) {
        res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-XSS-Protection", "1");
   res.setHeader("Content-Security-Policy","default-src * ;style-src 'self' 'unsafe-inline';script-src 'self' 'unsafe-inline' 'unsafe-eval' ;img-src * 'self' data: https:;");
    //res.header("X-Content-type-Options","nosniff");
    res.setHeader("Strict-Transport-Security","max-age=31536000");
    res.setHeader("Cache-control","public, max-age=30");
    res.setHeader('Last-Modified', dateNow);

    return next();
});

app.use(express.static(path.join(__dirname,'dist')));

app.get('*',function(req,res) {
                res.sendFile(path.join(__dirname,'dist/index.html'));
});

const port = process.env.PORT || '80';

app.set('port',port);

const server = http.createServer(app);

server.listen(port);
