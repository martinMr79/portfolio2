import styled from 'styled-components';
import BackgroundImage from '../../assets/images/projects.jpg';

export const ProjectSection = styled.section`
  display: flex;
  flex-direction: column; 
  min-height: 100vh;
  justify-content: center; 
  align-items: center; 
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

export const H2 = styled.h2`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -100px; 
  margin-bottom: 3rem;
  z-index: 2;

  @media (max-width: 1000px) {
  margin-top: 65px;
  margin-bottom: 35px;
  }
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  align-items: start;
  justify-content: center;
  margin: 0px auto;

  position: relative;
  z-index: 2;

  @media (min-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;



export const ProjectCard = styled.div`
  margin: 20px 0px;
  max-width: 400px;
  text-decoration: none;
  background-color: white; 
`;

export const ProjectAnchor = styled.div`
  text-decoration: none;
  
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  border: 1px, solid, black;
  margin-bottom: 4px; 
`;

export const ProjectP = styled.p`
  
  font-size: 20px;
  padding: 15px;
  margin-top: 0px;
  margin-bottom: 10px;
  color: black;
  background-color: white;
  text-align: center;
  z-index: 2;
`;

export const GithubLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; 
`;

export const GithubLink = styled.a`
  font-size: 17px;
  align-items: center;
  padding: 12px;
  margin: 10px;
  text-decoration: none;
  color: black;
  transition: 0.5s;
  font-family: 'MerriweatherSans', sans-serif;
  color: rgb(69, 6, 228);

  &:hover {
    color: white;
    background-color: black;
  }

`;
