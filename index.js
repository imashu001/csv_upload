const express = require("express");
const app = express();
const port = 5000;
const db = require("./config/mongoose");
const path = require("path");

app.use(express.urlencoded());
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(express.static("./assets"));

// use router
app.use("/", require("./routes/index"));

//
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
