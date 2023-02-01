const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema ({
    itemNum: String,
    description: String,
    currency: String,
    cost: Number
  },
  {
    timestamps: true,
  }
  );


module.exports = mongoose.model("Item", itemSchema);