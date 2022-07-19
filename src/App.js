import React from "react";
import Navbar from "./components/navbar";
import AboutMe from "./pages/aboutMe/Aboutme";
import Contact from "./pages/contact/contact";
import Portfolio from "./pages/portfolio/portfolio";



function App() {
  return (
    <div id="app">
      <Navbar />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
