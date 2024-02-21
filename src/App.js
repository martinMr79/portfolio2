import React, { useRef } from "react";
/* import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; */
import { NavBar, About, Projects, Contact } from "./components";

import HomePage from "../src/components/home"
import "./index.css";
import GlobalStyles from './GlobalStyles';
/* import { NavigationProvider } from "./NavigationContext"; // Import NavigationProvider */

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a ref
  const scrollToRef = (ref) => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });

  // Passing this function to Navbar to use with onClick
  const handleSectionClick = (section) => {
    const sectionRef = { home: homeRef, projects: projectsRef, about: aboutRef, contact: contactRef }[section];
    if (sectionRef) scrollToRef(sectionRef);
  };

  return (
    <>
      <GlobalStyles />
      <NavBar onSectionClick={handleSectionClick} />
      <div ref={homeRef}><HomePage /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  );
}

export default App;

