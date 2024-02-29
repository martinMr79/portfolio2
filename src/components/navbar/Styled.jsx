import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: fixed;
  background-color: black;
  padding: 30px;
  z-index: 9;
  top: 0;
  left: 0;
  bottom: 0;
  max-width: ${({ isOpen }) => (isOpen ? '150px' : '100px')};
  width: 100%;
  transition: max-width 0.3s ease-in-out;

  @media (max-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 14px 20px; 
    width: 100%;
    max-width: 100%;
    height: auto;
    bottom: auto;
  }

  div {
    display: flex;
    flex-direction: column;

    @media (max-width: 1200px) {
      flex-direction: row;
    }
  }
`;


export const IconContainer = styled.div`
  color: bisque;
  cursor: pointer;
`;

export const NavLink = styled.button`
  color: bisque;
  background-color: transparent;
  border: none;
  position: relative;
  margin-top: 50px;
  text-decoration: none;
  font-family: 'MerriweatherSans', sans-serif;
  font-size: 1.4rem;
  z-index: 2;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  max-height: ${({ isOpen }) => (isOpen ? '100px' : '0')};
  transition: opacity 0.5s, max-height 0.5s;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border-bottom: 3px solid bisque; /* Always show the border */
    transform: translateY(20px); /* Start with the underline further down */
    transition: transform 0.4s ease, opacity 0.4s ease;
    opacity: ${({ isActive }) => isActive ? '1' : '0'}; /* Control visibility with opacity */
  }

  &:hover::after, &:focus::after {
    opacity: 1; /* Ensure underline is visible on hover or focus */
    transform: translateY(3px); /* Move the underline upwards */
  }

  @media (max-width: 1200px) {
    order: -1; 
    margin: 10px 0;
    font-size: 1rem;
  }

  @media (min-width: 1200px) {
    transition: all 0.5s ease-in-out 0.2s, opacity 0.5s, max-height 0.
  }
  
  `;


export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;   
  text-align: center;
  
  &::after {
    content: '';
    background-color: black;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0; 
    left: 0;
    opacity: 0.8;
  }

  h1, h2, a {
    z-index: 1;
  }

  h1 {
    margin-bottom: 40px; 
    font-size: 57px;
    font-family: 'Roboto-Thin', sans-serif;
    text-transform: uppercase;
  }

  h2 {
    text-transform: uppercase;
    margin-top: 40px;
    font-size: 27px;
  }  


`;