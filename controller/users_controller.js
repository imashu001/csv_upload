const DB = require("../models/csv");
const path = require("path");
const Post = require("../models/csv");
const csv = require("csv-parser");
const fs = require("fs");
const converted = require("csvtojson");

//db upload
module.exports.uploadFile = async function (req, res) {
  if (req.file) {
    DB.create({
      name: path.parse(req.file.originalname).name,
      path: req.file.filename,
    });
  }
  return res.render("suceess");
};
// delete from db
module.exports.destroy = function (req, res) {
  Post.findById(req.params.id, function (err, posst) {
    posst.remove();
    return res.render("sus");
  });
};
module.exports.view = async function (req, res) {
  // console.log(path.join(__dirname, "./", "routes/uploads/"));
  try {
    let file = await DB.findById(req.params.id);
    console.log(file, "file");
    console.log(path.join(__dirname, "../", "routes/", "uploads/", file.path));
    let filePath = path.join(
      __dirname,
      "../",
      "routes/",
      "uploads/",
      file.path
    );

    const filedata = await converted().fromFile(filePath);
    return res.render("display", {
      title: file.name,
      fileFormat: filedata,
    });
  } catch (err) {
    //if error
    console.log(err);
    return res.redirect("back");
  }
};
