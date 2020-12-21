//connect to database
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/csvUpload");
//acquire the connection to check if it is successful or not
const db = mongoose.connection;
//error
db.on(
  "error",
  console.error.bind(console, "Error connecting to MongoDB:::database")
);
//up and running then print the msg
db.once("open", function () {
  console.log("Successfully connected to MongoDB:::database");
});
module.exports = db;
