var passport = require('passport');
var users = require('../controllers/users.server.controller');

module.exports = function(app) {
  app.route('/api/users')
    .post(users.create)
    .get(users.list);
  
  app.route('/signup')
    .get(users.renderSignup)
    .post(users.signup);
    
  app.route('/signin')
    .get(users.renderSignin)
    .post(passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/signin',
      failureFlash: true
    }));  
    
  app.route('/signout')
    .get(users.signout);
};
