import React from 'react';
import { ProjectSection, H2, ProjectsContainer, ProjectCard, ProjectImage, ProjectP, GithubLinksContainer, GithubLink, ProjectAnchor } from './styled';
import  HolidazeImage  from '../../assets/images/Holidaze.jpg';
import EcomImage from '../../assets/images/Ecom.jpg';
import BargainBasmentImage from '../../assets/images/BargainBasement.jpg';

function Projects() {
  return (
    <ProjectSection>
       <H2>Projects</H2>
      <ProjectsContainer>
        
        <ProjectCard>  
          <ProjectAnchor href="https://fantastic-puppy-a523c3.netlify.app" target="_blank" rel="noopener noreferrer">
            <ProjectImage src={HolidazeImage} alt="Accommodation Booking Site" />
            <ProjectP>Accommodation Booking Site</ProjectP>

          </ProjectAnchor>
          <GithubLinksContainer>
              <GithubLink
                href="https://github.com/martinMr79/project-exam2-martin-mroz#holidaze-accommodation-booking-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                View code <i className="fab fa-github"></i>
              </GithubLink>
            </GithubLinksContainer>
        </ProjectCard>
        

        <ProjectCard>  
          <ProjectAnchor href="https://cute-gumdrop-5dee9b.netlify.app" target="_blank" rel="noopener noreferrer">
            <ProjectImage src={EcomImage} alt="Accommodation Booking Site" />
            <ProjectP>E-Com Store</ProjectP>
          </ProjectAnchor>
          <GithubLinksContainer>
              <GithubLink
                href="https://github.com/martinMr79/front-end-frameworks-ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                View code <i className="fab fa-github"></i>
              </GithubLink>
            </GithubLinksContainer>
        </ProjectCard>

        <ProjectCard>  
          <ProjectAnchor href="https://snazzy-cupcake-064c05.netlify.app/" target="_blank" rel="noopener noreferrer">
            <ProjectImage src={BargainBasmentImage} alt="Accommodation Booking Site" />
            <ProjectP>Auction site</ProjectP>

          </ProjectAnchor>
          <GithubLinksContainer>
              <GithubLink
                href="https://github.com/martinMr79/Semester-Project-2/tree/main"
                target="_blank"
                rel="noopener noreferrer"
              >
                View code <i className="fab fa-github"></i>
              </GithubLink>
            </GithubLinksContainer>
        </ProjectCard>

      </ProjectsContainer>
    </ProjectSection>
  );
}

export default Projects;
