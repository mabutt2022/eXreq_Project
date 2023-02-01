const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const versionSchema = new Schema ({
    version: Number,
    userId: Schema.Types.ObjectId,
    name: String,
    department: String,
    category: String,
    serviceYear: String,
    documentName: String,
    requestDate: Date,
    clientProject: String,
    projectInfo: String,
    formVersion: [],
    item: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Item'
      }
    ]
  },
  {
    timestamps: true,
  }
  );


module.exports = mongoose.model("Version", versionSchema);