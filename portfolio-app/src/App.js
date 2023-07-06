import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="px-[10%]">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
