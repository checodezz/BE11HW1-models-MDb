const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishedYear: {
      type: Number,
      required: true,
    },
    genre: {
      type: [String],
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: "United States",
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    summary: {
      type: String,
    },
    coverImageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
