import React from 'react';
import { HomeWrapper, Title, Subtitle } from './styled'; 
import FadeInSection from '../smoothTransitions';

const HomePage = () => {
  return (
    <HomeWrapper>
      <FadeInSection> 
        <Title>Martin Mroz<br />Portfolio</Title>    
      </FadeInSection>
      <FadeInSection> 
        <Subtitle>
          Front end developer<br />
          located near Oslo
        </Subtitle>
      </FadeInSection>
    </HomeWrapper>
  );
};

  
  export default HomePage;