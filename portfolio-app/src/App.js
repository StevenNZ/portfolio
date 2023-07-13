import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty(
      "--scrollbar-track-color",
      darkMode ? "#121212" : "#f7f7f7"
    );
  }, [darkMode]);

  return (
    <Router>
      <div id="home" className={`App ${darkMode ? "dark" : ""}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
