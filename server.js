var express = require('./config/express');
var mongoose = require('./config/mongoose');

var db = mongoose();
var app = express();

app.listen(3000);

console.log('Server is on port 3000');

module.exports = app;
