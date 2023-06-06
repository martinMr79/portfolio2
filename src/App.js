import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, About, Projects, Contact, Footer } from "./components";
import  HomePage  from "./pages/home/index"
import "./index.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}



export default App;

