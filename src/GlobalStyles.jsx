import { createGlobalStyle } from "styled-components";
import RobotoThin from "./assets/fonts/";
//import RobotoThin from "./assets/fonts/Roboto-Thin.ttf";
import MerriweatherSans from "./assets/fonts/MerriweatherSans-Regular.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto-Thin';
    src: url(${RobotoThin}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'MerriweatherSans';
    src: url(${MerriweatherSans}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  h1 {
    font-size: 57px;
    font-family: 'Roboto-Thin', sans-serif;
    text-transform: uppercase;

    @media (max-width: 600px) {
      font-size: 42px;
    }
  }

  h2 {
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 2rem;

    @media (max-width: 600px) {
      font-size: 27px;
    }
  }

  p {
    font-family: 'MerriweatherSans', sans-serif;
    font-size: 18px;
  }
`;

export default GlobalStyles;
