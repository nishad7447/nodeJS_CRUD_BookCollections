import Book from "../Model/BookSchema.js";
import slugify from "slugify";

export default {
    
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      console.error("Error retrieving books:", error);
      res.status(500).json({ error: "Server error" });
    }
  },

  insertBook: async (req, res) => {
    const {
      title,
      author,
      genre,
      description,
      publishedDate,
      price,
      imageUrl,
    } = req.body;

    try {
      const slug = slugify(title, { lower: true });

      const existingBook = await Book.findOne({ slug });
      if (existingBook) {
        return res
          .status(400)
          .json({ error: "Book with the same title already exists" });
      }

      const newBook = new Book({
        title,
        author,
        genre,
        description,
        publishedDate,
        price,
        imageUrl,
        slug,
      });

      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (error) {
      console.error("Error inserting book:", error);
      res.status(500).json({ error: "Server error" });
    }
  },

  getBookBySlug: async (req, res) => {
    const slug = req.params.id;

    try {
      const book = await Book.findOne({ slug });
      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.status(200).json(book);
    } catch (error) {
      console.error("Error retrieving book:", error);
      res.status(500).json({ error: "Server error" });
    }
  },

  editBook: async (req, res) => {
    const existingSlug = req.params.id;
    const {
      title,
      author,
      genre,
      description,
      publishedDate,
      price,
      imageUrl,
    } = req.body;

    try {
      const book = await Book.findOne({ slug: existingSlug });
      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }

      if (title) {
        const slug = slugify(title, { lower: true });
        book.title = title;
        book.slug = slug;
      }
      if (author) {
        book.author = author;
      }
      if (genre) {
        book.genre = genre;
      }
      if (description) {
        book.description = description;
      }
      if (publishedDate) {
        book.publishedDate = publishedDate;
      }
      if (price) {
        book.price = price;
      }
      if (imageUrl) {
        book.imageUrl = imageUrl;
      }

      const updatedBook = await book.save();
      res.status(200).json(updatedBook);
    } catch (error) {
      console.error("Error updating book:", error);
      res.status(500).json({ error: "Server error" });
    }
  },

  deleteBook: async (req, res) => {
    const existingSlug = req.params.id;

    try {
      const book = await Book.findOne({ slug: existingSlug });
      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }

      const deletedBook = await Book.findByIdAndDelete(book.id);
      res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
      console.error("Error deleting book:", error);
      res.status(500).json({ error: "Error while deleting book by ID" });
    }
  },
};
