import React, { useEffect } from 'react'; // Correctly imported useEffect
import styled from 'styled-components'; 
import { useInView } from 'react-intersection-observer';
import { HomeWrapper, Title, Subtitle, Overlay } from './styled';
import { useNavigation } from '../../NavigationContext';

const FadeInWrapper = styled.div`
  transition: opacity 1.75s ease-out;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
`;

const HomePage = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const { setActiveSection } = useNavigation();
  
  useEffect(() => { // Using useEffect directly
    if (inView) {
      setActiveSection('home');
    }
  }, [inView, setActiveSection]);

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
