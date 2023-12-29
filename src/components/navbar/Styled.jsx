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
  transition: max-width 0.5s ease-in-out;

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

export const NavLink = styled.a`
  color: bisque;
  position: relative;
  margin-top: 50px;
  margin-bottom: 0px;
  text-decoration: none;
  font-family: 'MerriweatherSans', sans-serif;
  font-size: 1.4rem;
  z-index: 2;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  max-height: ${({ isOpen }) => (isOpen ? '100px' : '0')};
  transition: opacity 0.5s, max-height 0.5s;


  &::after {
    content: "";
    border-bottom: 3px solid bisque;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(10px);
    transition: transform 0.4s ease;
    opacity: 0;
    height: 100%;
    width: 100%;  
  }

  &:hover::after {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1200px) {
    order: -1; 
    margin: 10px 0;
    font-size: 1rem;
  }

  @media (min-width: 1200px) {
    transition: all 0.5s ease-in-out 0.2s, opacity 0.5s, max-height 0.5s;
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

  img {
    background-size: cover;
    width: 100%;
    height: 100vh;
  }
`;