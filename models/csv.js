const mongoose = require("mongoose");
const csvSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const CSV = mongoose.model("CSV", csvSchema);
module.exports = CSV;
