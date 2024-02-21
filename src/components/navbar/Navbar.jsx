import React, { useState } from 'react';
import { Header, Nav, IconContainer, NavLink } from './Styled'; 
/* import { Link as ScrollLink } from 'react-scroll'; */
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
/* import { useInView } from 'react-intersection-observer'; */



function Navbar({ onSectionClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Header>
      <Nav isOpen={isOpen}>
        <IconContainer onClick={toggle}>
          {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </IconContainer>
        <NavLink onClick={() => onSectionClick('home')} isOpen={isOpen}>Home</NavLink>
        <NavLink onClick={() => onSectionClick('projects')} isOpen={isOpen}>Projects</NavLink>
        <NavLink onClick={() => onSectionClick('about')} isOpen={isOpen}>About</NavLink>
        <NavLink onClick={() => onSectionClick('contact')} isOpen={isOpen}>Contact</NavLink>
      </Nav>
    </Header>
  );
}

export default Navbar;




