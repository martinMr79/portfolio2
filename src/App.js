import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, About, Projects, Contact } from "./components";
import  HomePage  from "../src/components/home"
import ScrollHandler from "./components/scrollHandler";
import "./index.css";
import GlobalStyles from './GlobalStyles';

function App() {
  const routeOrder = ['/', '/projects', '/about', '/contact'];

  return (
    <><GlobalStyles />
    <Router>
      <NavBar />
      <ScrollHandler routeOrder={routeOrder} /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>

    </Router>
    </>
  );
}



export default App;

