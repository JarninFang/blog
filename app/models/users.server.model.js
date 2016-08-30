var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var UserSchema = new Schema({
  username: {
    type: String,
		// Set a unique 'username' index
		unique: true,
		// Validate 'username' value existance
		required: 'Username is required'
  },
  password: {
    type: String,
    required: 'Password is required'
  },
  name: {
    type: String,
    required: 'Name is required'
  },
  email: {
    type: String,
    required: 'Email is required',
    unique: true
  },
  provider: {
    type: String,
    required: 'Provider is required'
  }
});

//Password hashing
UserSchema.pre('save', function(next) {
  const saltrounds = 10;
  this.password = bcrypt.hashSync(this.password, saltrounds);
  next();
});

UserSchema.methods.authenticate = function(password) {
  return bcrypt.compareSync(password, this.password);
};

mongoose.model('User', UserSchema);
