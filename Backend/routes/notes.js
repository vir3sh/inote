const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser.js");
const Note = require("../models/Notes");
// const jwt = require("jsonwebtoken");
// const JWT_SECRET = "vireshisgoodboy";

const { body, validationResult } = require("express-validator");

//ROUTE 1 get all notes using fetch
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});
//ROUTE 2 adding notes
router.post(
  "/addnotes",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "description must be atleast 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({ title, description, tag, user: req.user.id });
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

//ROUTE 3 Update note
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  // Create a newNote object
  const newNote = {};
  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }

  // Find the note to be updated and update it
  let note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404).send("Not Found");
  }

  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Not Allowed");
  }

  note = await Note.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json({ note });
});

//ROUTE 4

router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  // const { title, description, tag } = req.body;

  //note to be deleted
  let note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404).send("not found");
  }

  //allow deletion if user own this
  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("not allowed");
  }
  note = await Note.findByIdAndDelete(req.params.id);
  res.json({ "success ": "note delted", note: note });
});

module.exports = router;
