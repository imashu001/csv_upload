const DB = require("../models/csv");
const path = require("path");
const Post = require("../models/csv");
const csv = require("csv-parser");
const fs = require("fs");

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
module.exports.view = function (req, res) {
  let querry = DB.findById(req.params.id);
  // let location = path.join(__dirname, "uploads/", querry.path);
  // console.log(location);
  // fs.createReadStream("location")
  //   .pipe(csv())
  //   .on("data", (row) => {
  //     console.log(row);
  //   })
  //   .on("end", () => {
  //     console.log("CSV file successfully processed");
  //   });

  return res.render("suceess");
};
