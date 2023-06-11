import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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
