import styled from 'styled-components';
import BackgroundImage from '../../assets/images/ContactMe.jpg';

export const PageWrapper = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center center;

  &::after {
    content: '';
    background-color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0; 
    left: 0;
    opacity: 0.8;
    z-index: 1;  
  }
  
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;  
`;

export const H2 = styled.h2`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 2rem;
  margin-top: 5rem;
  margin-bottom: 3rem;
  text-align: center;  
  z-index: 2;  
`;

 export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  margin-top: 0px;
  padding-top: 4rem;
  z-index: 2;    
`;

 export const ContactList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
  padding: 0px 0px 30px 0px;
  margin-bottom: 0px;
  z-index: 2;  
`;



export const ContactLink = styled.a`
  font-size: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  border-radius: 50%;
  margin: 20px 20px;
  width: 50px;
  height: 50px;
  text-decoration: none;
  color: black;
  transition: 0.5s;

  &:hover {
    color: rgb(69, 6, 228);
    transition: 0.3s;
    transform: scale(1.1);
  }
`; 