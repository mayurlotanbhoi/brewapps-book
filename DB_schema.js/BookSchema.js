import mongoose from "mongoose";

// Define the book schema
const bookSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
      },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  summary:{
    type: String,
    required: true
  }
});

// Create the book model
const Book = mongoose.model("Book", bookSchema);

export default  Book; // Export the Book model
