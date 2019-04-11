var express = require('express');
var mongoose = require('mongoose');
var pug = require('pug');

var app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res){
  res.render('index');
});

app.listen(9999);