import styled from 'styled-components';
import BackgroundImage from '../../assets/images/ContactMe.jpg';


export const FormWrapper = styled.div`
  background-color: white;
  padding: 25px;
  border-radius: 5px; 
`;

export const InnerWrapper = styled.div`
  position: relative; 
  z-index: 2;
  padding: 2em;
  display: flex; 
  justify-content: center;
  align-items: center; 
`;


export const PageWrapper = styled.div`  
  display: flex; 
  justify-content: center; 
  align-items: center; 
  position: relative;
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
`;

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  margin-top: 0px;
  padding-top: 0rem;
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

export const H2 = styled.h2`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;

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

export const CVButton = styled.button`
  font-size: 17px;
  align-items: center;
  padding: 12px;
  margin: 30px;
  text-decoration: none;
  color: black;
  transition: 0.5s;
  font-family: 'MerriweatherSans', sans-serif;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: black;
  }

`;

export const LanguageSelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const LanguageCheckboxWrapper = styled.div`
  display: flex; 
  align-items: center; 
  background-color: ${props => props.isSelected ? '#E0E0E0' : 'transparent'};
  padding: 5px; 
  margin: 0px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
`;


export const FlagIcon = styled.img`
  width: 24px;
  height: 24px;
`;