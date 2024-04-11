import React from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const state = {
    name: "Viresh",
    class: "5v",
  };
  return (
    <NoteState.provider value={state}>{props.children}</NoteState.provider>
  );
};

export default NoteState;
