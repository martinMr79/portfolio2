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
  margin-bottom: 60px;
  z-index: 2;

  @media (max-width: 768px) {
  margin-top: 65px;
  margin-bottom: 40px;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0px auto 0;
  position: relative;
  z-index: 2;
`;

export const ProjectCard = styled.div`
  margin: 20px 10px 20px 10px;
  max-width: 350px;
  text-decoration: none;
  background-color: white; 

`;

export const ProjectAnchor = styled.a`
  text-decoration: none;
  
`;

export const ProjectImage = styled.img`
  width: 320px;
  height: 200px;
  transition: transform 0.3s ease;
  margin-bottom: 4px; 

&:hover {
  transform: scale(1.05);
}
`;

export const ProjectP = styled.p`
  
  font-size: 20px;
//  padding: 15px;
  margin-top: 0px;
  margin-bottom: 30px;
  color: black;
  background-color: white;
  text-align: center;
  
  z-index: 2;
`;

export const GithubLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


`;

export const GithubLink = styled.a`
  font-size: 17px;
  align-items: center;
  padding: 12px;
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
