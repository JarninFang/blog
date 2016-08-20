var passport = require('passport');
var mongoose = require('mongoose');

module.exports = function() {
  //Load the User model
  var User = mongoose.model('User');
  
  require('./strategies/local.js');
};
