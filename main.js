var express = require('express');
var app = express();

var util = require('./utils');
var mongoose = require('mongoose');

const 
  PORT = process.env.PORT || 3000;


var options = {};
var connectionString = process.env.MONGODB_CONNECTION_STRING;

if (!connectionString.startsWith('mongodb://')) {
  connectionString = `mongodb://${connectionString}`;
}



var
  catsSchema, Cats
  db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  catsSchema = mongoose.Schema({
    name: String,
    color:  String
  });

  Cats = mongoose.model('cats', catsSchema);
  console.log("Mongoose initialized!");
});

mongoose.connect(connectionString, options);




app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/health', function (req, res) {
  res.send('All good');
});

app.get('/database', function (req, res) {
  
  util.mongooseFind(Cats)
    .then( results => res.send(results) )
    .catch( err => {
      res.send(err)
      console.error(err)
    })
});


app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`)
});
