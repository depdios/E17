const express = require("express");
const mongoose = require("mongoose");

const { User } = require("./models/userModel");
const { Ebook } = require("./models/ebookModel");



const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  const allUsers = await User.find();
  return res.status(200).json(allUsers);
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  return res.status(200).json(user);
});

app.post("/users", async (req, res) => {
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