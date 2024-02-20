import React, { useState } from 'react';
import { ProjectSection, H2, ProjectsContainer, ProjectCard, ProjectCardContent, ProjectImage, ProjectTitle, GithubLinksContainer, GithubLink, ProjectCardText} from './styled';
import FadeInSection from '../smoothTransitions';
import HolidazeImage  from '../../assets/images/Holidaze.jpg';
import EcomImage from '../../assets/images/Ecom.jpg';
import BargainBasmentImage from '../../assets/images/BargainBasement.jpg';
import bitsAndBotsImage from '../../assets/images/bitsAndBotsImage.PNG'
import TradyImage from '../../assets/images/Trady.PNG'
import airCalculator from '../../assets/images/airCalculator.PNG'
import Modal from '../modal';
import { useInView } from 'react-intersection-observer';
import { useNavigation } from '../../NavigationContext'; 


const projects = [

  {
    id: 1,
    title: 'Airfreight Chargeable weight',
    imageUrl: airCalculator,
    description: 'Airfreight chargeable weight, calculate weight and volume of shipments. Built with React and TailwindCSS',
    fullDescription: 'The Airfreight Chargeable Weight Calculator is an intuitive web application designed to streamline the process of calculating the chargeable weight for airfreight shipments. This tool caters to logistics professionals, freight forwarders, and anyone involved in the shipping industry, offering a precise and efficient way to determine the weight and volume of shipments. Built with React and TailwindCSS',
    links: [
      { url: 'https://github.com/martinMr79/flyfrakt', label: 'Github Repo', icon: 'fab fa-github' },
      { url: 'https://airfreight-volume-weight.netlify.app/', label: 'Demo', icon: 'fa-solid fa-globe' }
    ]
  },
  {
    id: 2,
    title: 'Trady',
    imageUrl: TradyImage,
    description: 'Developed the company website for Trady AS. Built with JavaScript and TailwindCss',
    fullDescription: 'Developed the company website for Trady AS. Built with JavaScript and TailwindCss',
    links: [
      { url: 'https://www.trady.no/', label: 'www.trady.no', icon: 'fa-solid fa-globe' }
    ]
  },
  {
    id: 3,
    title: 'Bits & Bots',
    imageUrl: bitsAndBotsImage,
    description: 'Video game store website, built with React, Zustand, and styled components, using Wordpress for Backend',
    fullDescription: "Bits & Bots is a premier video game store website. Designed for the modern gamer, our site features user registration/login, detailed game information, and a dynamic cart system for a seamless shopping experience. Utilizing React, Zustand, and Styled Components for the frontend, and WordPress with WooCommerce in headless mode for the backend.\n\nKey Features:\nPersonalized user experiences with registration/login.\nExplore games by genre with ease.\nIn-depth game details for informed choices.\nSimplified cart and checkout process.\n\nTechnology Stack:\nFrontend: React, Zustand, Styled Components.\nBackend: WordPress, WooCommerce, ACF.",
    links: [
      { url: 'https://github.com/martinMr79/bits-and-bots', label: 'Github Repo', icon: 'fab fa-github' },
      { url: 'https://venerable-lebkuchen-cf4179.netlify.app/', label: 'Demo', icon: 'fa-solid fa-globe' }
    ]
  },
  
  {
    id: 4,
    title: 'Accommodation Booking Site',
    imageUrl: HolidazeImage,
    description: 'Accommodation booking site, built with react, zustand, and MUI, using Noroff`s API.',
    fullDescription: 'Holidaze is a modern, user-friendly accommodation booking site that connects users with their ideal holiday venues. With a sleek front end design, Holidaze offers seamless navigation and functionality, ensuring an enjoyable booking experience. The platform also includes an admin-facing side where registered users can manage venues and bookings efficiently.Use a stud.noroff.no e-mail adress to register a new user.',
    links: [
      { url: 'https://github.com/martinMr79/project-exam2-martin-mroz#holidaze-accommodation-booking-site', label: 'Github Repo', icon: 'fab fa-github' },
      { url: 'https://fantastic-puppy-a523c3.netlify.app', label: 'Demo', icon: 'fa-solid fa-globe' }
    ]
  },
  {
    id: 5,
    title: 'E-Com Store',
    imageUrl: EcomImage,
    description: 'An e-commerce website built using react, and styled components, using Noroff`s API.',
    fullDescription: 'an e-commerce store built using React, aimed at applying knowledge of React and creating a functional e-commerce website. It utilizes the API provided at https://api.noroff.dev/api/v1/online-shop for retrieving product data.',
    links: [
      { url: 'https://github.com/martinMr79/front-end-frameworks-ca', label: 'Github Repo', icon: 'fab fa-github' },
      { url: 'https://cute-gumdrop-5dee9b.netlify.app', label: 'Demo', icon: 'fa-solid fa-globe' }
    ]
  },
  {
    id: 6,
    title: 'Auction Site',
    imageUrl: BargainBasmentImage,
    description: 'Auction house website, built with JavaScript and Tailwind, using Noroff`s API.',
    fullDescription: 'Bargain Basement Auction is a website where users can add items to be bid on and bid on items listed by other users. When a new user joins the website, they are given 1000 credits to use for bidding on items. Users can earn additional credits by selling items, and they can utilize their credits to purchase items. Non-registered users can search through the listings, but only registered users can place bids on items.',
    links: [
      { url: 'https://github.com/martinMr79/Semester-Project-2/tree/main', label: 'Github Repo', icon: 'fab fa-github' },
      { url: 'https://snazzy-cupcake-064c05.netlify.app/', label: 'Demo', icon: 'fa-solid fa-globe' }
    ]
  }
];

function Projects() {

  const { setActiveSection } = useNavigation();
  const { ref, inView } = useInView({
    /* Optional: add configuration here, such as threshold: 0.1 */
  });

  // Update active section when the component is in view
  React.useEffect(() => {
    if (inView) {
      setActiveSection('/projects'); // Update the active section
    }
  }, [inView, setActiveSection]);


  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
      <ProjectSection ref={ref}> 
      <H2>Projects</H2>
      <ProjectsContainer>
        {projects.map(project => (
          <FadeInSection key={project.id} hasBackground={true} applyHoverEffect={true}>
            <ProjectCard key={project.id} onClick={() => openModal(project)}>
              <ProjectCardContent>
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
              </ProjectCardContent>
            </ProjectCard>
          </FadeInSection>
        ))}
      </ProjectsContainer>
      <Modal show={!!selectedProject} project={selectedProject} onClose={closeModal}>
  {selectedProject && (
    <>
      
      <div>
        {selectedProject.links.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: "block", margin: "10px 0" }}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  )}
</Modal>

    </ProjectSection>
  );
}

export default Projects;
