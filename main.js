/* This is a test 2 */

var express = require('express');
var app = express();

var util = require('./utils');
var mongoose = require('mongoose');

const 
  PORT = process.env.PORT || 3000;

/**
 * Require databse configuration depending on environment
 */
var conf = {
    servers: [[process.env.DATABASE_IP, process.env.DATABASE_PORT]],
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    replicaSet: null
};
var options = {};

var connectionString = util.createConnectionString(conf);


if (conf.replicaSet) {
  options.replset = conf.replicaSet;
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
