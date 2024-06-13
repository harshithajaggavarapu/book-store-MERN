import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();
// post method route to save a new book
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      response
        .status(400)
        .send(
          "All required fields are not sent. Please send title,author,publisher"
        );
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    const book = await Book.create(newBook);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// get method http route for fetching all books data
router.get("/", async (_, response) => {
  try {
    const books = await Book.find({});
    response.status(400).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// get method http route for fetching a book using ID
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    response.status(400).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// update(put) method http route for updating a book using ID
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      response
        .status(500)
        .send(
          "All required fields are not sent. Please send title,author,publisher"
        );
    }
    const { id } = request.params;
    const book = await Book.findByIdAndUpdate(id, request.body);

    if (!book) {
      return response.status(404).send({ message: "Book not found" });
    }
    response.status(200).send({ message: "Book update successful" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// delete a book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).send({ message: "Book not found" });
    }
    response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

export default router;
