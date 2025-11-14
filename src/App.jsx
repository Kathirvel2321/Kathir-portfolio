import React from "react";
import Hero from "./pages/Hero";
import Skill from "./pages/Skill";
import Hero1 from "./pages/Hero1";
const App = () => {
  return (
    <div>
      <div className="hero overflow-hidden"><Hero1 /></div>
      
      <Skill />


      <div className="Projects"></div>

      <div className="Quote"></div>

      <div className="About"></div>

      <footer></footer>
    </div>
  );
};

export default App;
