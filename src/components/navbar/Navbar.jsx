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
      <h1>Martin Mroz<br />web development student</h1>
      <hr />
      <h2>
        Front end development student at Noroff<br />
        located near Oslo
      </h2>
      <NavLink href="#contact">Contact me</NavLink>
    </Header>
  );
}

export default Navbar;
