import styled from 'styled-components';
import BackgroundImage from '../../assets/images/Portefolio.jpg';

export const HomeWrapper = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  color: white;
  position: relative;
  

  &::after {
    content: '';
    background-color: black;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0; 
    left: 0;
    opacity: 0.7;
    z-index: 0;  
  }
`;

export const Title = styled.h1`
  margin-bottom: 40px; 
  font-size: 57px;
  font-family: 'Roboto-Thin', sans-serif;
  text-transform: uppercase;
  z-index: 2;  
  position: relative; 
`;

export const Subtitle = styled.h2`
  text-transform: uppercase;
  margin-top: 40px;
  font-size: 27px;
  z-index: 2; 
  position: relative; 
`;
