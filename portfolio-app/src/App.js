import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div id="home" className="App">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
