import React, { useState } from 'react';
import { Header, Nav, NavLink, Hamburger } from './Styled'; 
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Header>
      <Nav isOpen={isOpen}>
        <Hamburger isOpen={isOpen} onClick={toggle}>
          <div />
          <div />
          <div />
        </Hamburger>
        
        <NavLink as={Link} to="/projects" isOpen={isOpen}>Projects</NavLink>
        <NavLink as={Link} to="/contact" isOpen={isOpen}>Skills</NavLink>
        <NavLink as={Link} to="/about" isOpen={isOpen}>About</NavLink>
        <NavLink as={Link} to="/contact" isOpen={isOpen}>Contact</NavLink>
      </Nav>
    </Header>
  );
}



export default Navbar;






