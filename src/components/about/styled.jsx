import styled from 'styled-components';
import BackgroundImage from '../../assets/images/about.jpg';

export const AboutSection = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center center;
  position: relative;
  
  &::after {
    content: '';
    background-color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0; 
    left: 0;
    opacity: 0.8;
    z-index: 1;  
  }
`;

export const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2; 
  

  @media (max-width: 1200px) {
    max-width: 550px;
  }
`;



export const H2 = styled.h2`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 2rem;
  margin-bottom: 35px;
  text-align: center;  
`;

export const Paragraph = styled.p`
 font-size: 18px;
 margin: 5px; 
`;

export const Skills = styled.div`
      font-size: 2.5rem;
      color: black;
      margin: 115px 30px 3px 30px;
      opacity: 0.9;
`;

export const Icon = styled.i`
  font-size: 2.5rem;
  color: black;
  margin: 115px 30px 3px 30px;
  opacity: 0.8;
`;

