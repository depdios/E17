require('rootpath')();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const { User } = require("./models/userModel");
const { Ebook } = require("./models/ebookModel");

const bodyParser = require('body-parser');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3001'
}));

app.use(jwt());

app.use(errorHandler);

app.use(express.json());

app.get("/", async (req, res) => {
  res.send('Acceso general')
});

app.get("/users", async (req, res) => {
  const allUsers = await User.find();
  return res.status(200).json(allUsers);
});

require('./user/users.controller')(app)

app.post("/users/login/", async (req, res) => {
  const logUser = await User.findOne({ email: req.body.email });
  if (!logUser)
    return res.status(400);
  else if (logUser.password == req.body.password)
    return res.status(200).send(logUser);
  else
    return res.status(400);
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  return res.status(200).json(user);
});

app.post("/users/signup", async (req, res) => {
  const newUser = new User({ ...req.body });
  const insertedUser = await newUser.save();
  return res.status(201).json(insertedUser);
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  await User.updateOne({ id }, req.body);
  const updatedUser = await User.findById(id);
  return res.status(200).json(updatedUser);
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.findByIdAndDelete(id);
  return res.status(200).json(deletedUser);
});

app.get("/ebooks", async (req, res) => {
  const allEbooks = await Ebook.find();
  return res.status(200).json(allEbooks);
});

app.get("/ebooks/:id", async (req, res) => {
  const { id } = req.params;
  const ebook = await Ebook.findById(id);
  return res.status(200).json(ebook);
});

app.post("/ebooks", async (req, res) => {
  const newEbook = new Ebook({ ...req.body });
  const insertedEbook = await newEbook.save();
  return res.status(201).json(insertedEbook);
});

app.put("/ebooks/:id", async (req, res) => {
  const { id } = req.params;
  await Ebook.updateOne({ id }, req.body);
  const updatedEbook = await Ebook.findById(id);
  return res.status(200).json(updatedEbook);
});

app.delete("/ebooks/:id", async (req, res) => {
  const { id } = req.params;
  const deletedEbook = await Ebook.findByIdAndDelete(id);
  return res.status(200).json(deletedEbook);
});

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/bookerinDB"
    );
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();