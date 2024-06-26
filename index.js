const express = require("express");
const app = express();
const cors= require("cors");

const corsOption = {
  origin : "*",
  credentials : true
}

app.use(cors(corsOption))
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
      res.status(201).json({ message: "book added successfully.", book: book });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to add book." });
  }
});

//3. Create an API to get all the books in the database as response. Make sure to do error handling.

async function allBooks() {
  try {
    const books = await Book.find();
    return books;
  } catch (error) {
    throw error;
  }
}

app.get("/books", async (req, res) => {
  try {
    const books = await allBooks();
    if (books.length != 0) {
      res.status(200).json({ message: "All books", books: books });
    } else {
      res.status(404).json({ error: "No books found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

//4. Create an API to get a book's detail by its title. Make sure to do error handling.

async function bookByTitle(title) {
  try {
    const book = await Book.findOne({ title: title });
    return book;
  } catch (error) {
    throw error;
  }
}

app.get("/books/:title", async (req, res) => {
  try {
    const book = await bookByTitle(req.params.title);
    if (book) {
      res.status(200).json({ book: book });
    } else {
      res.status(404).json({ error: "Book not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch book" });
  }
});

//5. Create an API to get details of all the books by an author. Make sure to do error handling.

async function bookByAuthor(author) {
  try {
    const book = await Book.find({ author: author });
    return book;
  } catch (error) {
    throw error;
  }
}

app.get("/books/author/:authorName", async (req, res) => {
  try {
    const book = await bookByAuthor(req.params.authorName);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Book not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books." });
  }
});

//6. Create an API to get all the books which are of "Business" genre.

async function booksByGenre(bookGenre) {
  try {
    const books = await Book.find({ genre: bookGenre });
    return books;
  } catch (error) {
    throw error;
  }
}

app.get("/books/genre/:genreName", async (req, res) => {
  try {
    const books = await booksByGenre(req.params.genreName);
    if (books.length > 0) {
      res.json(books);
    } else {
      res.status(404).json({ error: "Books not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books." });
  }
});

//Create an API to get all the books which was released in the year 2012.

async function booksByYear(year) {
  try {
    const books = await Book.find({ publishedYear: year });
    return books;
  } catch (error) {
    throw error;
  }
}

app.get("/books/year/:publishedYear", async (req, res) => {
  try {
    const books = await booksByYear(req.params.publishedYear);
    if (books.length != 0) {
      res.json(books);
    } else {
      res.status(404).json({ error: "Books not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books." });
  }
});

//8. Create an API to update a book's rating with the help of its id. Update the rating of the "Lean In" from 4.1 to 4.5. Send an error message "Book does not exist", in case that book is not found. Make sure to do error handling.

async function updateBookRating(bookId, updatedRating) {
  try {
    const book = await Book.findByIdAndUpdate(bookId, updatedRating, {
      new: true,
    });
    return book;
  } catch (error) {
    throw error;
  }
}

app.post("/books/ratings/:bookId", async (req, res) => {
  try {
    const book = await updateBookRating(req.params.bookId, req.body);
    if (book) {
      res
        .status(201)
        .json({ message: "Book updated successfully", book: book });
    } else {
      res.status(404).json({ error: "Book not found." });
    }
  } catch (error) {
    res.status(500).n({ error: "Faijsoled to fetch books." });
  }
});

//9. Create an API to update a book's rating with the help of its title. Update the details of the book "Shoe Dog". Use the query .findOneAndUpdate() for this. Send an error message "Book does not exist", in case that book is not found. Make sure to do error handling.

async function updateBookDetails(bookTitle, updatedData) {
  try {
    const updatedBook = await Book.findOneAndUpdate({title : bookTitle}, updatedData, {new : true});
    return updatedBook;
  } catch (error) {
    throw error;
  }
}

app.post("/books/details/:bookTitle", async (req,res) => {
  try {
    const book = await updateBookDetails(req.params.bookTitle, req.body);
    if(book){
      res.status(201).json({message : "Updated book successfully.", book : book})
    } else {
      res.status(404).json({error: "Book does not exist."})
    }
  } catch(error){
    console.log(error)
    res.status(500).json({error : "failed to fetch books."})
  }
})

//10. Create an API to delete a book with the help of a book id, Send an error message "Book not found" in case the book does not exist. Make sure to do error handling.

async function deleteBook(bookId){
  try {
    const deletedBook = await Book.findByIdAndDelete(bookId);
    return deletedBook;
  } catch (error){
    throw error
  }
}

app.delete("/books/:bookId", async (req,res) => {
  try {
    const book = await deleteBook(req.params.bookId);
    if(book){
      res.json({message : "Deleted book successfully."})
    } else {
      res.status(404).json({error : "Book not found."})
    }
  } catch(error){
    res.status(500).json({error : "failed to fetch book."})
  }
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});
