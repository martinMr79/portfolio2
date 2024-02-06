import React from 'react';
import styled from 'styled-components'; // Import styled
import { useInView } from 'react-intersection-observer'; // Ensure this is imported if you're using it
import { HomeWrapper, Title, Subtitle, Overlay } from './styled';

const FadeInWrapper = styled.div`
  opacity: 0; /* Set initial opacity */
  transition: opacity 1.75s ease-out;
  ${({ inView }) => inView && `
    opacity: 1; /* Transition to this opacity when inView is true */
  `}
`;


const HomePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5,    // Trigger when 50% of the element is in view
  });

  return (
    <HomeWrapper>
      <Overlay /> {/* Overlay is now a sibling, not a parent */}
      <FadeInWrapper ref={ref} inView={inView}>
        <Title>Martin Mroz<br />Portfolio</Title>
        <Subtitle>Front end developer<br />located near Oslo</Subtitle>
      </FadeInWrapper>
    </HomeWrapper>
  );
};

export default HomePage;
