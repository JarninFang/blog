var mongoose = require('mongoose');
var config = require('./config');

module.exports = function() {
  mongoose.connect(config.db);
  
  //Load the application models
  require('../app/models/users.server.model');
};
