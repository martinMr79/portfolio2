import React, { useState } from 'react';
import { Header, Nav, NavLink, IconContainer } from './Styled'; 
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Header>
      <Nav isOpen={isOpen}>
        <IconContainer onClick={toggle}>
          {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </IconContainer>
        <NavLink as={Link} to="/projects" $isOpen={isOpen}>Projects</NavLink>
        <NavLink as={Link} to="/about" $isOpen={isOpen}>About</NavLink>
        <NavLink as={Link} to="/contact" $isOpen={isOpen}>Contact</NavLink>
      </Nav>
    </Header>
  );
}

export default Navbar;



