import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

// Styled component for the container
const FadeInSectionContainer = styled.div`
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transition: opacity 1.75s ease-out; // Apply the transition here
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
  padding: 1rem;
  text-align: center;
`;

const FadeInSection = ({ title, imageSrc, imageAlt, children }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      rootMargin: '-50px 0px',
    });
  

    return (
        <FadeInSectionContainer ref={ref} inView={inView}>
          <h2>{title}</h2>
          <Image src={imageSrc} alt={imageAlt} />
          <TextSection>{children}</TextSection>
        </FadeInSectionContainer>
      );
    };

export default FadeInSection;
