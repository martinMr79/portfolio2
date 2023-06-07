import styled from 'styled-components';

export const ProjectSection = styled.section`
  display: flex;
  flex-direction: column; 
  min-height: 100vh;
  justify-content: center; 
  align-items: center; 
`;

export const H2 = styled.h2`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0px auto 0;
  
 
`;

export const ProjectCard = styled.div`
  margin: 20px 10px 110px 10px;
  max-width: 350px;
  text-decoration: none;

`;

export const ProjectAnchor = styled.a`
  text-decoration: none;
`;

export const ProjectImage = styled.img`
  width: 320px;
  height: 200px;
  border: 1px solid black;
  transition: transform 0.3s ease;

&:hover {
  transform: scale(1.05);
}
`;

export const ProjectP = styled.p`
  font-size: 20px;
  margin-top: 12px;
  margin-bottom: 30px;
  color: black;
  text-align: center;
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
