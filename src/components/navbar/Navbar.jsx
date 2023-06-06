import React from 'react';
import { Header, Nav, NavLink } from './Styled'; 

function Navbar() {
  return (
    <Header>
      <Nav>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Nav>
      <h1>Martin Mroz<br />Portfolio</h1>
      <hr />
      <h2>
        Front end developer<br />
        located near Oslo
      </h2>
    </Header>
  );
}

export default Navbar;
