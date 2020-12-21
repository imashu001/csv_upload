const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const usersController = require("../controller/users_controller");

// you can watch  all the files in routes/uploads
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads/"));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".csv");
  },
});

var upload = multer({
  storage: storage,
  //filter only csv file by extension
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    if (ext !== ".csv") {
      return cb(
        new Error("Not a .csv file please try file with extension .csv")
      );
    }
    cb(null, true);
  },
});

// router.post("/upload", function (req, res) {
//   upload(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//       console.log("not a csv");
//     } else if (err) {
//       // An unknown error occurred when uploading.
//       console.log("Unidentified error");
//     }

//
//   });
// });
//route to Upload any csv file into the system  you can watch in routes/uploads
router.post("/upload", upload.single("csvfile"), usersController.uploadFile);
router.get("/destroy/:id", usersController.destroy);
router.get("/view/:id", usersController.view);
module.exports = router;
