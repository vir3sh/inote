const mongoose = require("mongoose");

const { Schema } = mongoose;

const NotesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    default: "General",
  },
});

module.exports = mongoose.model("notes", NotesSchema);
