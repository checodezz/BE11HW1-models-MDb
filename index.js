const express = require("express");
const app = express();
const { initializeDatabase } = require("./db/db.connect");
const Book = require("./models/books.model");
app.use(express.json());
initializeDatabase();

// const jsonData = fs.readFileSync("books.json", "utf8");
// const booksData = JSON.parse(jsonData);

/* function seedData() {
  for (const bookData of booksData) {
    const newBook = new Book({
      title: bookData.title,
      author: bookData.author,
      publishedYear: bookData.publishedYear,
      genre: bookData.genre,
      language: bookData.language,
      country: bookData.country,
      rating: bookData.rating,
      summary: bookData.summary,
      coverImageUrl : bookData.coverImageUrl
    });
    newBook.save();
    console.log("Books Data", newBook.title);
  }
}
seedData();
 */

// app.get("/", async (req, res) => {
//   await res.send("Hello");
// });

//1. Create an API with route "/books" to create a new book data in the books Database. Make sure to do error handling. Test your API with Postman. Add the following book:

async function createBook(newBook) {
  try {
    const book = new Book(newBook);
    const saveBook = await book.save();
    return saveBook;
  } catch (error) {
    throw error;
  }
}

app.post("/books", async (req, res) => {
  try {  
    const book = await createBook(req.body);
    if (book) {
      res.status(201).json({ message: "book added successfully." , book : book});
    } 
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to add book." });
  }
});


//3. Create an API to get all the books in the database as response. Make sure to do error handling.

async function allBooks(){
  try {
    const books = await Book.find();
    return books
  } catch(error){
    throw error
  }
}

app.get("/books", async (req,res) => {
  try {
    const books = await allBooks();
    if(books.length != 0){
      res.status(200).json({message : "All books", books : books})
    } else {
      res.status(404).json({error : "No books found."})
    }
  } catch(error){
    res.status(500).json({error : "Failed to fetch books"})
  }
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});

