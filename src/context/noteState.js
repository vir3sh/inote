import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "661695e4ab9f5adc2d3ad73b",
      user: "66155b1fbae9815e6e26630d",
      title: "never",
      description: "give me sunshine",
      tag: "up",
      __v: 0,
    },
    {
      _id: "661696e788e090043b7bb333",
      user: "66155b1fbae9815e6e26630d",
      title: "never",
      description: "give me sunshine",
      tag: "up",
      __v: 0,
    },
  ];

  //Add a note

  const addNote = (title, description, tag) => {
    const note = {
      _id: "661696e788e090043b7bb333",
      user: "66155b1fbae9815e6e26630d",
      title: title,
      description: description,
      tag: "up",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //delete a note
  //edit a note

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
