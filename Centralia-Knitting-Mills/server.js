var http = require('http');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
