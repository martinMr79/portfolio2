import React, { useState, useEffect } from 'react';
import { Header, Nav, NavLink, IconContainer } from './Styled'; 
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useInView } from 'react-intersection-observer';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { ref: projectsRef, inView: projectsInView } = useInView();
  const { ref: aboutRef, inView: aboutInView } = useInView();
  const { ref: contactRef, inView: contactInView } = useInView();
  
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    // This is where you would update navigation link state based on which ref is in view.
    // For example:
    console.log("Projects in view:", projectsInView);
    console.log("About in view:", aboutInView);
    console.log("Contact in view:", contactInView);
  }, [projectsInView, aboutInView, contactInView]);

  return (
    <Header>
      <Nav isOpen={isOpen}>
        <IconContainer onClick={toggle}>
          {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </IconContainer>
        <NavLink as={Link} to="/projects" isOpen={isOpen} ref={projectsRef}>Projects</NavLink>
        <NavLink as={Link} to="/about" isOpen={isOpen} ref={aboutRef}>About</NavLink>
        <NavLink as={Link} to="/contact" isOpen={isOpen} ref={contactRef}>Contact</NavLink>
      </Nav>
    </Header>
  );
}

export default Navbar;




