import React from 'react';
import { ProjectSection, H2, ProjectsContainer, ProjectCard, ProjectImage, ProjectP, GithubLinksContainer, GithubLink, ProjectAnchor } from './styled';
import HolidazeImage from '../../assets/images/Holidaze.PNG';

function Projects() {
  return (
    <ProjectSection>
      <H2>Projects</H2>
      <ProjectsContainer>
        
        <ProjectCard>  
          <ProjectAnchor href="https://fantastic-puppy-a523c3.netlify.app" target="_blank" rel="noopener noreferrer">
            <ProjectImage src={HolidazeImage} alt="Accommodation Booking Site" />
            <ProjectP>Accommodation Booking Site</ProjectP>
            <GithubLinksContainer>
              <GithubLink
                href="https://github.com/martinMr79/project-exam2-martin-mroz#holidaze-accommodation-booking-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                View code <i className="fab fa-github"></i>
              </GithubLink>
            </GithubLinksContainer>
          </ProjectAnchor>
        </ProjectCard>

      </ProjectsContainer>
    </ProjectSection>
  );
}

export default Projects;
