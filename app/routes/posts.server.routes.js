var posts = require('../controllers/posts.server.controller.js');

module.exports = function(app) {
  app.route('/api/posts')
    .get(posts.list)
    .post(posts.create);

  app.route('/api/posts/:postId')
    .get(posts.read)
    .put(posts.update)
    .delete(posts.remove);

  app.param('postId', posts.postByID);
};
