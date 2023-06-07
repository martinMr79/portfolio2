import styled from 'styled-components';

export const AboutSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;



export const H2 = styled.h2`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 2rem;
  margin-top: 65px;
  margin-bottom: 60px;


  @media (max-width: 768px) {
  margin-top: 365px;
  margin-bottom: 60px;
  }
`;

export const Paragraph = styled.p`
 font-size: 18px;
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

