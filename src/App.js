import React, { useRef } from "react";
import { NavBar, About, Projects, Contact } from "./components";
import HomePage from "../src/components/home"
import "./index.css";
import GlobalStyles from './GlobalStyles';

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });

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

