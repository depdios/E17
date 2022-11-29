const mongoose = require("mongoose");

const EbookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: String,
    require: false,
  },
  genres: {
    type: [String],
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
    match: [/(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)/, "Please fill a valid ISBN"]
  },
});

const Ebook = mongoose.model("Ebook", EbookSchema);

module.exports = { Ebook };