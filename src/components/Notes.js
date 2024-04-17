import React, { useContext, useState } from "react";
import noteContext from "../context/noteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="row my-3">
      <h2>your Notes</h2>
      {notes.map((notes) => {
        return <Noteitem note={notes} />;
      })}
    </div>
  );
};

export default Notes;
