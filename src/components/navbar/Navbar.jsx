import React, { useState } from 'react';
import { Header, Nav, NavLink, IconContainer } from './Styled'; 
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // Define a custom NavLink component for react-scroll
  const CustomScrollLink = ({ to, children }) => (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={toggle}
    >
      {children}
    </ScrollLink>
  );

  return (
    <Header>
      <Nav isOpen={isOpen}>
        <IconContainer onClick={toggle}>
          {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </IconContainer>
        <NavLink as="div">
          <CustomScrollLink to="projectsSection">Projects</CustomScrollLink>
        </NavLink>
        <NavLink as={RouterLink} to="/about" onClick={toggle}>About</NavLink>
        <NavLink as={RouterLink} to="/contact" onClick={toggle}>Contact</NavLink>
      </Nav>
    </Header>
  );
}

export default Navbar;




