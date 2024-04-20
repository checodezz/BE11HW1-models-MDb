const { initializeDatabase } = require("./db/db.connect");
const fs = require("fs");
const Book = require("./models/books.model");
initializeDatabase();

const jsonData = fs.readFileSync("books.json", "utf8");
const booksData = JSON.parse(jsonData);

function seedData() {
  for (const bookData of booksData) {
    const newBook = new Book({
      title: bookData.title,
      author: bookData.author,
      publishedYear: bookData.publishedYear,
      genre: bookData.genre,
      languages: bookData.languages,
      country: bookData.country,
      rating: bookData.rating,
      summary: bookData.summary,
    });
    newBook.save();
    console.log("Books Data", newBook.title);
  }
}
seedData();
