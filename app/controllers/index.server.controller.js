exports.render = function(req, res) {
  res.render('index', {
    pageTitle: "Home",
    user: JSON.stringify(req.user)
  }); 
};
