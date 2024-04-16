/* 
6. Create a Mongoose model for a Note with the following attributes:

title (String): The title or subject of the note. This field is required.
content (String): The main content or body of the note.
category (String): The category or type of the note. Choose from: 'Personal', 'Work', 'Study', 'Ideas', 'Journal', 'Other'.
tags (Array of Strings): Tags or keywords associated with the note.
Include the option { timestamps: true } to automatically track the creation and update times of each note.
*/

const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Personal", "Work", "Study", "Ideas", "Journal", "Other"],
    },
    tags: {
      type: [String],
    },
  },
  { timestamps: true },
);

const Note = mongoose.model("Note", notesSchema);
module.exports = Note;
