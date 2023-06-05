import React from "react";
import { NavBar, About, Projects, Contact, Footer } from "./components";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
