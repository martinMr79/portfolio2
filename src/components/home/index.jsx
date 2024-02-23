import React from 'react';
import styled from 'styled-components'; 
import { useInView } from 'react-intersection-observer';
import { HomeWrapper, Title, Subtitle, Overlay } from './styled';

const FadeInWrapper = styled.div`
  transition: opacity 1.75s ease-out;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
`;

const HomePage = () => {
  const { ref, inView } = useInView({

  });

  return (
    <HomeWrapper>
      <Overlay />
      <FadeInWrapper ref={ref} inView={inView}>
        <Title>Martin Mroz<br />Portfolio</Title>
        <Subtitle>Front end developer<br />located near Oslo</Subtitle>
      </FadeInWrapper>
    </HomeWrapper>
  );
};

export default HomePage;
