import React from 'react';
import { HomeWrapper, Title, Subtitle } from './styled'; 

const HomePage = () => {
    return (
      <HomeWrapper>
        <Title>Martin Mroz<br />Portfolio</Title>
        <hr />
        <Subtitle>
          Front end developer<br />
          located near Oslo
        </Subtitle>
      </HomeWrapper>
    );
  };
  
  export default HomePage;