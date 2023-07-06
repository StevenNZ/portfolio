import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="px-[10%]">
        <Hero />
      </div>
    </div>
  );
}

export default App;
