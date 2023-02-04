const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const otherSchema = new Schema ({
  Other: []
  },
  {
    timestamps: true,
  });

const formSchema = new Schema ({
    userId: {type: Schema.Types.ObjectId},
    name: String,
    documentId: {type: Schema.Types.ObjectId},
    department: String,
    category: String,
    serviceYear: String,
    documentName: String,
    requestDate: Date,
    clientProject: String,
    projectInfo: String,
    purpose: String,
    otherFields: [otherSchema],
    item: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Item'
      }
    ],
    version: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Version'
        }
    ]
  },
  {
    timestamps: true,
  }
  );


module.exports = mongoose.model("Form", formSchema);