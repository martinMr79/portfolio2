import styled from 'styled-components';
import BackgroundImage from '../../assets/images/about.jpg';

export const BackgroundContainer = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center center;
  z-index: -1; 
`;

export const AboutSection = styled.section`
  position: relative;
  z-index: 1; 
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.7); 
    z-index: -1; 
  }
`;


export const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2; 
  

  @media (max-width: 1200px) {
    max-width: 550px;
    margin-top: 95px;
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
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  align-items: center;

  

  h2 {
    text-align: center;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;




