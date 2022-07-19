import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Open Source Contributor",
          "MERN Stack Developer",
        ],
        autoStart: true,
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Typing;