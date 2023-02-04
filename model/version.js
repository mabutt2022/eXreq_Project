const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const versionSchema = new Schema ({
    userId: Schema.Types.ObjectId,
    documentId: Schema.Types.ObjectId,
    versionNum: Number,
    name: String,
    department: String,
    category: String,
    serviceYear: String,
    documentName: String,
    requestDate: Date,
    clientProject: String,
    projectInfo: String, 
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