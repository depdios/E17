const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    require: false,
    unique: true,
    match: [/\d{9}/, 'Please fill a valid phone number']
  },
  favGenres: {
    type: [String],
    required: false,
  },
  favAuthors: {
    type: [String],
    required: false,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };