const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema ({
    email: String,
    password: String,
    admin: String
  },
  {
    timestamps: true,
  }
  );


module.exports = mongoose.model("Item", itemSchema);