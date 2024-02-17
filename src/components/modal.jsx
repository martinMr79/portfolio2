// Modal.jsx
import React from 'react';
import styled from 'styled-components';

export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 35px;
  text-align: center;  
`;

export const ModalText = styled.p`
  text-align: center;
  margin: 0; 
  padding: 20px 0; 
  font-size: 16px; 
`;

export const ModalImg = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
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
        {children}
        <ModalImg src={project?.imageUrl} alt={project?.title} />
        <ModalText>{project?.fullDescription}</ModalText>
        
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal;
