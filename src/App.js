import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, About, Projects, Contact } from "./components";
import HomePage from "../src/components/home"
import ScrollHandler from "./components/scrollHandler";
import "./index.css";
import GlobalStyles from './GlobalStyles';
import { NavigationProvider } from "./NavigationContext"; // Import NavigationProvider

function App() {
  const routeOrder = ['/', '/projects', '/about', '/contact'];

  return (
    <NavigationProvider> 
      <GlobalStyles />
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
    </NavigationProvider>
  );
}

export default App;


