var passport = require('passport');
var mongoose = require('mongoose');

module.exports = function() {
  //Load the User model
  var User = mongoose.model('User');
  
  //Serialize the user
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  //Deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    }); 
  });

  require('./strategies/local.js')();
};
