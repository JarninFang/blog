var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {
    type: String,
    required: 'Title cannot be blank'
  }, 
  content: {
    type: String,
    default: ''
  }
});

mongoose.model('Post', PostSchema);
