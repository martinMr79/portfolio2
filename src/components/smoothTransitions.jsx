import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const FadeInSectionContainer = styled.div`
  background-color: ${({ hasBackground }) => hasBackground ? 'white' : 'transparent'};
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transition: opacity 0.75s ease-out;
`;

// Styled component for the image
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Styled component for the text section
const TextSection = styled.div`
 /* padding: 1rem; */
  text-align: center;
`;

const FadeInSection = ({ children, hasBackground, title, imageSrc, imageAlt }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  return (
    <FadeInSectionContainer ref={ref} inView={inView} hasBackground={hasBackground}>
      {title && <h2>{title}</h2>}
      {imageSrc && <Image src={imageSrc} alt={imageAlt || 'Image'} />}
      <TextSection>{children}</TextSection>
    </FadeInSectionContainer>
  );
};

export default FadeInSection;
