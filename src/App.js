import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, About, Projects, Contact } from "./components";
import  HomePage  from "./pages/home/index"
import "./index.css";
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <><GlobalStyles />
    <Router>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<HomePage />} />
      </Routes>

    </Router>
    </>
  );
}



export default App;

