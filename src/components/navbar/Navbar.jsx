import React, { useState } from 'react';
import { Header, Nav, IconContainer, NavLink } from './Styled'; 
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar({ onSectionClick, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Header>
      <Nav isOpen={isOpen}>
        <IconContainer onClick={toggle}>
          {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </IconContainer>
        {/* Pass active prop based on current section */}
        <NavLink onClick={() => onSectionClick('home')} active={activeSection === 'home'} isOpen={isOpen}>Home</NavLink>
        <NavLink onClick={() => onSectionClick('projects')} active={activeSection === 'projects'} isOpen={isOpen}>Projects</NavLink>
        <NavLink onClick={() => onSectionClick('about')} active={activeSection === 'about'} isOpen={isOpen}>About</NavLink>
        <NavLink onClick={() => onSectionClick('contact')} active={activeSection === 'contact'} isOpen={isOpen}>Contact</NavLink>
      </Nav>
    </Header>
  );
}


export default Navbar;




