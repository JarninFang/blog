var mongoose = require('mongoose');
var config = require('./config');

module.exports = function() {
  var db = mongoose.connect(config.db);
  console.log('Connecting to ' + config.db);
  
  //Load the application models
  require('../app/models/users.server.model');

  return db;
};
