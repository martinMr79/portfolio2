import React from 'react';
import { ProjectSection, H2, ProjectsContainer, ProjectCard, ProjectImage, ProjectTitle, GithubLinksContainer, GithubLink, ProjectCardText} from './styled';
import  HolidazeImage  from '../../assets/images/Holidaze.jpg';
import EcomImage from '../../assets/images/Ecom.jpg';
import BargainBasmentImage from '../../assets/images/BargainBasement.jpg';

function Projects() {
  return (
    <ProjectSection>
       <H2>Projects</H2>
      <ProjectsContainer>
        
        <ProjectCard>  
          
              <ProjectTitle>Accommodation Booking Site</ProjectTitle>
            <ProjectImage src={HolidazeImage} alt="Accommodation Booking Site" />
            
            <ProjectCardText>accommodation booking site, built with react, zustand, MUI, using Noroff`s API.</ProjectCardText>
        

            <GithubLinksContainer>
              <GithubLink
                href="https://github.com/martinMr79/project-exam2-martin-mroz#holidaze-accommodation-booking-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo <i className="fab fa-github"></i>
              </GithubLink>
              <GithubLink
                href="https://fantastic-puppy-a523c3.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo <i className="fa-solid fa-globe"></i>
              </GithubLink>    
          </GithubLinksContainer>
        </ProjectCard>
        

        <ProjectCard>  
          <ProjectTitle>E-Com Store</ProjectTitle>
            <ProjectImage src={EcomImage} alt="Accommodation Booking Site" />

            <ProjectCardText>An e-commerce website built using react, and styled components, using Noroff`s API.</ProjectCardText>

            <GithubLinksContainer>
              <GithubLink
                href="https://github.com/martinMr79/front-end-frameworks-ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo <i className="fab fa-github"></i>
              </GithubLink>
              <GithubLink
                href="https://cute-gumdrop-5dee9b.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo <i className="fa-solid fa-globe"></i>
              </GithubLink>    
          </GithubLinksContainer>
        </ProjectCard>

        <ProjectCard>  

           <ProjectTitle>Auction site</ProjectTitle>
            <ProjectImage src={BargainBasmentImage} alt="Accommodation Booking Site" />
            
            <ProjectCardText>Auction house website, built with JavaScript and Tailwind, using Noroff`s API.</ProjectCardText>
            
          <GithubLinksContainer>
              <GithubLink
                href="https://github.com/martinMr79/Semester-Project-2/tree/main"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo <i className="fab fa-github"></i>
              </GithubLink>
              <GithubLink
                href="https://snazzy-cupcake-064c05.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo <i className="fa-solid fa-globe"></i>
              </GithubLink>    
          </GithubLinksContainer>
        </ProjectCard>

        

      </ProjectsContainer>
    </ProjectSection>
  );
}

export default Projects;
