import React, { useState } from 'react';
import { Header, Nav, IconContainer, NavLink } from './Styled'; 
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigation } from '../../NavigationContext';

function Navbar({ onSectionClick }) {
  const { activeSection } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // Determine if a NavLink is active
  const isActive = (sectionName) => activeSection === sectionName;

  return (
    <Header>
      <Nav isOpen={isOpen}>
        <IconContainer onClick={toggle}>
          {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </IconContainer>
        {/* Use the isActive function to determine if each NavLink is active */}
        <NavLink active={isActive('home')} onClick={() => onSectionClick('home')} isOpen={isOpen}>Home</NavLink>
        <NavLink active={isActive('projects')} onClick={() => onSectionClick('projects')} isOpen={isOpen}>Projects</NavLink>
        <NavLink active={isActive('about')} onClick={() => onSectionClick('about')} isOpen={isOpen}>About</NavLink>
        <NavLink active={isActive('contact')} onClick={() => onSectionClick('contact')} isOpen={isOpen}>Contact</NavLink>
      </Nav>
    </Header>
  );
}



export default Navbar;




