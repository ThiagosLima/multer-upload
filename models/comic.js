const mongoose = require("mongoose");

const comicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pages: [
    {
      fieldname: { type: String },
      originalname: { type: String },
      encoding: { type: String },
      mimetype: { type: String },
      buffer: { type: Buffer },
      size: { type: Number }
    }
  ]
});

const Comic = mongoose.model("Comic", comicSchema);

module.exports = Comic;
