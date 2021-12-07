var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.get('/getusers', function (req, res) {
    fs.readFile('data.json', 'utf-8', function (err, data) {
        console.log(data);
        res.send(JSON.parse(data));
    })
})

app.listen(process.env.PORT || 8080);

console.log('Run server!');