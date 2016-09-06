var mongoose = require('mongoose');
var Post = mongoose.model('Post');

exports.create = function(req, res) {
  var post = new Post(req.body);
  console.log('Creating post');

  post.save(function(err) {
    if(err) return res.status(400).send(); 
    res.json(post);
  });
};

exports.list = function(req, res) {
  Post.find({}, function(err, posts) {
    res.send(posts);
  });
};

exports.read = function(req, res) {
  res.json(req.post);  
};

exports.update = function(req, res) {
  var post = req.post;

  post.title = req.body.title;
  post.content = req.body.content;

  post.save(function(err) {
    if(err) {
      return res.status(400).send({
        message: err
      });
    } else {
      res.json(post);
    }
  });
};

exports.remove = function(req, res) {
  var post = req.post;

  post.remove(function(err) {
    if(err) {
      return res.status(400).send({
        message: err
      });
    } else {
      res.json(post);
    }    
  });
};

exports.postByID = function(req, res, next, id) {
  Post.findById(id).exec(function(err, post) {
    if(err) return next(err);
    if(!post) return next(new Error('Failed to load post' + id));

    req.post = post;
    next();
  }); 
};
