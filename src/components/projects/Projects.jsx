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
          <ProjectAnchor>
              <ProjectP>Accommodation Booking Site</ProjectP>
            <ProjectImage src={HolidazeImage} alt="Accommodation Booking Site" />
            

          </ProjectAnchor>


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
          <ProjectAnchor href="https://cute-gumdrop-5dee9b.netlify.app" target="_blank" rel="noopener noreferrer">
          <ProjectP>E-Com Store</ProjectP>
            <ProjectImage src={EcomImage} alt="Accommodation Booking Site" />
            
          </ProjectAnchor>
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
          <ProjectAnchor>
           <ProjectP>Auction site</ProjectP>
            <ProjectImage src={BargainBasmentImage} alt="Accommodation Booking Site" />
            
            <p>Auction house website built with JavaScript, Sass, and Bootstrap</p> 
            <p>Features include:</p>
            <ul>
              <li>account registration</li>  
              <li>login, and logout exclusive to users with a stud.noroff.no email</li>
              <li>Registered users can update avatars, view credit, create detailed listings, and bid on listings</li>
              <li>Unregistered users can search available listings for accessibility and convenience</li>
            </ul>
            
        </ProjectAnchor>
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
