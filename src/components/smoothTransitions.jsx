import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const FadeInSectionContainer = styled.div`
  background-color: ${({ hasBackground }) => hasBackground ? 'white' : 'transparent'};
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transition: opacity 1.2s ease-out;
  ${({ applyHoverEffect }) =>
    applyHoverEffect &&
    `
    transition: all 1.2s ease; 
    &:hover {
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
  `}
`;


const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TextSection = styled.div`
 /* padding: 1rem; */
  text-align: center;
`;

const FadeInSection = ({ children, hasBackground, title, imageSrc, imageAlt, applyHoverEffect}) => {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
    
  });

  return (
    <FadeInSectionContainer ref={ref} inView={inView} hasBackground={hasBackground} applyHoverEffect={applyHoverEffect}>
      {title && <h2>{title}</h2>}
      {imageSrc && <Image src={imageSrc} alt={imageAlt || 'Image'} />}
      <TextSection>{children}</TextSection>
    </FadeInSectionContainer>
  );
};

export default FadeInSection;
