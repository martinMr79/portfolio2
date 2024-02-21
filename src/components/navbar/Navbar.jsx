import React, { useState } from 'react';
import { Header, Nav, IconContainer } from './Styled'; 
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
        <button onClick={() => onSectionClick('home')}>Home</button>
        <button onClick={() => onSectionClick('projects')}>Projects</button>
        <button onClick={() => onSectionClick('about')}>About</button>
        <button onClick={() => onSectionClick('contact')}>Contact</button>
      </Nav>
    </Header>
  );
}

export default Navbar;




