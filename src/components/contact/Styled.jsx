import styled from 'styled-components';

export const PageWrapper = styled.div`  
   display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const H2 = styled.h2`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 2rem;
  margin-bottom: 35px;
  margin-top: 5rem;
  text-align: center;  
`;

 export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  margin-top: 0px;
  padding-top: 4rem;
    
`;

 export const ContactList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
  padding: 0px 0px 30px 0px;
  margin-bottom: 0px;
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