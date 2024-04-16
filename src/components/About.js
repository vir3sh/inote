import React, { useContext, useEffect } from "react";
import noteContext from "../context/noteContext";

const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  }, []);
  return (
    <div>
      this is about {a.state.name} and he studies in {a.state.class}
    </div>
  );
};

export default About;
