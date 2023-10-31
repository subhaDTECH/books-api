const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  summary: String,
},{timestamps:true});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
