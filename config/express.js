var express = require('express');
var bodyparser = require('body-parser');
var morgan = require('morgan');
var compression = require('compression');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

module.exports = function() {
  var app = express(); 

	// Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

  //Configure bodyparser
	app.use(bodyparser.urlencoded({
		extended: true
	}));
	app.use(bodyparser.json());

  //Configure compression
  app.use(compression());

  //Configure passport
  app.use(passport.initialize());
  app.use(passport.session());

  //Configure flash messages
  app.use(flash());

	// Set the application view engine and 'views' folder
	app.set('views', './app/views');
	app.set('view engine', 'jade');

  //Set up static file serving
  app.use(express.static('./public')); 

  //Load routese
  require('../app/routes/index.server.routes')(app);
  require('../app/routes/users.server.routes')(app);

  return app;
};
