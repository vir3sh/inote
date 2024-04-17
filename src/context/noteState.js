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

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
