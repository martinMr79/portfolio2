import React from 'react';
import { Header, Nav, NavLink } from './Styled'; 
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Header>
      <Nav>
      <NavLink as={Link} to="/projects">Projects</NavLink>
        <NavLink as={Link} to="/about">About</NavLink>
        <NavLink as={Link} to="/contact">Contact</NavLink>
      </Nav>
    </Header>
  );
}

export default Navbar;
