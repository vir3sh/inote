import React, { useContext, useEffect } from "react";
import noteContext from "../context/noteContext";

const About = () => {
  const { state, update } = useContext(noteContext);

  return <div>this is about Vires</div>;
};

export default About;
