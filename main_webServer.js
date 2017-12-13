var express = require('express');
var app = express();
const powers = require('./src/common/util/math/myPower.js');

app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'Hello Express with EJS' },
        name: 'Vincent',
        lastname: 'Mustillo'
    };
    res.status(200).render('./pages/home.ejs', data2template);
});

var inpSquare = 2;

app.get('/square', function(req, res) {
    var data3template = {
        head: { title: 'Square Page' },
        data: {
            inpNumber: 2,
            squared: powers.myPower(inpSquare, 2)
        }
    };
    res.status(200).render('./pages/square.ejs', data3template);
});

var inpCube = 3;

app.get('/cube', function(req, res) {
    var cubeTemplate = {
        head: { title: 'Cube Page' },
        data: {
            inpNumber: 3,
            cubed: powers.myPower(inpCube, 3)
        }
    };
    res.status(200).render('./pages/cube.ejs', cubeTemplate);
});

app.get('/about', function(req, res) {
    res.status(200).render('./pages/about.html');
});

app.get('/*', function(req, res) {
    var errorTemplate = {
        head: { title: 'Error Page' }
    };
    res.status(404).render('./pages/error.ejs', errorTemplate);
});

var server = app.listen(8015, function() {
    console.log(
        'express app, exam_section_2, started and listening at http://%s:%s',
        server.address().address,
        server.address().port);
});