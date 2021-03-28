import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    align-items: center;
    height: 100vh;
    background: #fff;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }

  body, input, textarea, button {
    font: 400 1rem Montserrat, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
`;
