/* This is a test 2 */

var express = require('express');
var app = express();

// var util = require('./utils');
var mongoose = require('mongoose');

const 
  PORT = process.env.PORT || 3000;


var options = {};
var connectionString = process.env.MONGODB_CONNECTION_STRING;

if (!connectionString.startsWith('mongodb://')){
  connectionString = `mongodb://${connectionString}`;
}

mongoose.connect(connectionString, options);


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/health', function (req, res) {
  res.send('All good');
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
