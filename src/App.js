import React from "react";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import AboutMe from "./components/aboutMe";


function App() {
  return (
    <div id="app">
      <Navbar />
      <AboutMe />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
