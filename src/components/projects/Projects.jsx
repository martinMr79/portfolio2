import React from 'react';
import { ProjectSection, H2, ProjectsContainer, ProjectCard, ProjectImage, ProjectTitle, GithubLinksContainer, GithubLink, ProjectCardText} from './styled';
import FadeInSection from '../smoothTransitions';
import HolidazeImage  from '../../assets/images/Holidaze.jpg';
import EcomImage from '../../assets/images/Ecom.jpg';
import BargainBasmentImage from '../../assets/images/BargainBasement.jpg';
import bitsAndBotsImage from '../../assets/images/bitsAndBotsImage.PNG'
import TradyImage from '../../assets/images/Trady.PNG'

const projects = [
  {
    id: 1,
    title: 'Trady',
    imageUrl: TradyImage,
    description: 'Developed the company website for Trady AS. Built with JavaScript and TailwindCss',
    links: [
      { url: 'https://www.trady.no/', label: 'www.trady.no', icon: 'fa-solid fa-globe' }
    ]
  },
  {
    id: 2,
    title: 'Bits & Bots',
    imageUrl: bitsAndBotsImage,
    description: 'Video game store website, built with react, zustand, and styled components, using Wordpress as API',
    links: [
      { url: 'https://github.com/martinMr79/bits-and-bots', label: 'Github Repo', icon: 'fab fa-github' },
      { url: 'https://venerable-lebkuchen-cf4179.netlify.app/', label: 'Demo', icon: 'fa-solid fa-globe' }
    ]
  },
  {
    id: 3,
    title: 'Accommodation Booking Site',
    imageUrl: HolidazeImage,
    description: 'Accommodation booking site, built with react, zustand, and MUI, using Noroff`s API.',
    links: [
      { url: 'https://github.com/martinMr79/project-exam2-martin-mroz#holidaze-accommodation-booking-site', label: 'Github Repo', icon: 'fab fa-github' },
      { url: 'https://fantastic-puppy-a523c3.netlify.app', label: 'Demo', icon: 'fa-solid fa-globe' }
    ]
  },
  {
    id: 4,
    title: 'E-Com Store',
    imageUrl: EcomImage,
    description: 'An e-commerce website built using react, and styled components, using Noroff`s API.',
    links: [
      { url: 'https://github.com/martinMr79/front-end-frameworks-ca', label: 'Github Repo', icon: 'fab fa-github' },
      { url: 'https://cute-gumdrop-5dee9b.netlify.app', label: 'Demo', icon: 'fa-solid fa-globe' }
    ]
  },
  {
    id: 5,
    title: 'Auction Site',
    imageUrl: BargainBasmentImage,
    description: 'Auction house website, built with JavaScript and Tailwind, using Noroff`s API.',
    links: [
      { url: 'https://github.com/martinMr79/Semester-Project-2/tree/main', label: 'Github Repo', icon: 'fab fa-github' },
      { url: 'https://snazzy-cupcake-064c05.netlify.app/', label: 'Demo', icon: 'fa-solid fa-globe' }
    ]
  }
];

function Projects() {
  return (
    <ProjectSection>
      <H2>Projects</H2>
      <ProjectsContainer>
        {projects.map(project => (
          <FadeInSection key={project.id}> {/* Wrap each project card with FadeInSection */}
            <ProjectCard>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectImage src={project.imageUrl} alt={project.title} />
              <ProjectCardText>{project.description}</ProjectCardText>
              <GithubLinksContainer>
                {project.links.map((link, index) => (
                  <GithubLink key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label} <i className={link.icon}></i>
                  </GithubLink>
                ))}
              </GithubLinksContainer>
            </ProjectCard>
          </FadeInSection>
        ))}
      </ProjectsContainer>
    </ProjectSection>
  );
}

export default Projects;
