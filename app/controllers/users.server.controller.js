var User = require('mongoose').model('User');

exports.create = function(req, res) {
  var user = new User(req.body);
  user.save(function(err, user) {
    if(err) res.send(err);
    res.send(user);
  });  
};

exports.list = function(req, res) {
  User.find({}, function(err, users) {
    if(err) res.send(err);
    res.send(users);
  });
};

exports.renderSignup = function(req, res) {
  if(!req.user) {
    res.render('signup', {
      pageTitle: 'Sign up',
      messages: req.flash('error')
    });  
  } else {
    return res.redirect('/');
  }
};

exports.signup = function(req, res, next) {
  console.log(req.body);
  
  //Check if the user is already logged in
  if(!req.user) {
    //Create a new user object using info from the sign up page
    var user = new User(req.body);
    var message = null;

    user.provider = 'local';

    user.save(function(err) {
      console.log('saving user password: ' + user.password);
      if(err) {
        var message = getErrorMessage(err);
        req.flash('error', message);
        return res.redirect('/signup');
      }
      
      //If the user is saved successfully, log them in
      req.login(user, function(err) {
        if(err) return next(err);
        return res.redirect('/');
      });
    });
  } else {
    res.redirect('/');
  }
};

exports.renderSignin = function(req, res) {
  res.render('signin', {
    pageTitle: 'Sign in',
    messages: req.flash('error') || req.flash('info')
  });
};

exports.signout = function(req, res) {
  req.logout();
  res.redirect('/');
};

// Create a new error handling controller method
var getErrorMessage = function(err) {
	// Define the error message variable
	var message = '';

	// If an internal MongoDB error occurs get the error message
	if (err.code) {
		switch (err.code) {
			// If a unique index error occurs set the message error
			case 11000:
			case 11001:
				message = 'Username already exists';
				break;
			// If a general error occurs set the message error
			default:
				message = 'Something went wrong';
		}
	} else {
		// Grab the first error message from a list of possible errors
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	// Return the message error
	return message;
};
