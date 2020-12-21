const Post = require("../models/csv");

module.exports.home = function (req, res) {
  Post.find({}, function (err, posts) {
    return res.render("home", {
      posts: posts,
    });
  });
};
