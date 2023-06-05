import styled from 'styled-components';
import BackgroundImage from '../../assets/images/Portefolio.jpg';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  background-color: black;
  padding: 20px;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
`;

export const NavLink = styled.a`
  color: bisque;
  position: relative;
  margin-right: 50px;
  text-decoration: none; 
  font-family: 'MerriweatherSans', sans-serif;
  font-size: 1.2rem;
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
`;

export const Header = styled.header`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
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
    color: white;
  }

  h1, hr, h2, a {
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
