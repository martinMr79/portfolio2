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
        {isOpen && (
          <>
            <NavLink as={Link} to="/projects">Projects</NavLink>
            <NavLink as={Link} to="/contact">Skills</NavLink>
            <NavLink as={Link} to="/about">About</NavLink>
            <NavLink as={Link} to="/contact">Contact</NavLink>
          </>
        )}
      </Nav>
    </Header>
  );
}


export default Navbar;






