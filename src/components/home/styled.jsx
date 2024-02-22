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
  position: relative; 
  z-index: 0; 
`;

const textTransition = 'color 0.75s ease-out, opacity 1.75s ease-out';

export const Title = styled.h1`
 transition: ${textTransition};
  margin-bottom: 40px;
  font-size: 57px;
  font-family: 'Roboto-Thin', sans-serif;
  text-transform: uppercase;
  z-index: 2; 
  position: relative; 
  color: white;
`;

export const Subtitle = styled.h2`
  text-transform: uppercase;
  margin-top: 40px;
  font-size: 27px;
  z-index: 2; 
  position: relative; 
  color: white;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); 
  z-index: -1; 
`;
