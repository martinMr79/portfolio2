import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; 



export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 35px;
`;

export const ModalText = styled.p`
  text-align: center;
  margin: 0; 
  padding: 20px; 
  font-size: 16px; 
`;

export const ModalImg = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
`;

export const ModalGithubLinksContainer = styled.div`
  display: flex;
  justify-content: center; 
  padding: 10px 0; 
`;

export const ModalGithubLinks = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 35px;
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

  
export const IconContainer = styled.span`
  margin-left: 5px;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 700px;
  width: 100%;
`;

const CloseButton = styled.button`
  float: right;
  font-size: 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: white;
    background-color: black;
  }

`;

const Modal = ({ project, children, show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalTitle>{project?.title}</ModalTitle>
        <ModalImg src={project?.imageUrl} alt={project?.title} />
        <ModalText>{project?.fullDescription}</ModalText>
        <ModalGithubLinksContainer>
  {project?.links.map((link, index) => {
    let iconComponent;

    // Determine the icon based on the link.icon value
    switch (link.icon) {
      case 'fab fa-github':
        iconComponent = <FontAwesomeIcon icon={faGithub} />;
        break;
      case 'fa-solid fa-globe':
        iconComponent = <FontAwesomeIcon icon={faGlobe} />;
        break;
      // Add more cases as necessary
      default:
        iconComponent = null; // No icon for unrecognized cases
    }

    return (
      <ModalGithubLinks key={index} href={link.url} target="_blank" rel="noopener noreferrer">
        {link.label}
        {iconComponent && <IconContainer>{iconComponent}</IconContainer>}
      </ModalGithubLinks>
    );
  })}
</ModalGithubLinksContainer>



      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal;
