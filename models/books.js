const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema({
  bookId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  authors: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  }
});

const books = mongoose.model("books", bookSchema);
module.exports = books;
