import React, { useContext } from "react";
import noteContext from "../context/noteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";

const Home = () => {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <>
      <Addnote />

      <div className="container  my-3">
        <h2>your Notes</h2>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Home;
