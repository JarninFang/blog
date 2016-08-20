var User = require('mongoose').model('User');
exports.create = function(req, res) {
  var user = new User(req.body);
  user.save(function(err, user) {
    if(err) res.send(err);
    res.send(user);
  });  
};

exports.list = function(req, res) {
  user.find({}, function(err, users) {
    if(err) res.send(err);
    res.send(users);
  });
};

exports.renderSignup = function(req, res) {
  res.render('signup', {
    pageTitle: 'Sign up'
  });  
};

exports.signup = function(req, res) {
  console.log(req.body);
};
