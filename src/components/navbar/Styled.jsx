import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: fixed;
  background-color: black;
  padding: 50px;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;
    bottom: auto;
    padding: 10px 0;
    
  }
`;

export const NavLink = styled.a`
  color: bisque;
  position: relative;
  margin-bottom: 50px; 
  text-decoration: none; 
  font-family: 'MerriweatherSans', sans-serif;
  font-size: 1.6rem;
  z-index: 2;

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

  @media (max-width: 768px) {
    margin-bottom: 0;
    font-size: 1rem;
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
    color: red;
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
