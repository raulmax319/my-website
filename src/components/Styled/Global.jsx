import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Nunito&family=Quicksand:wght@400;500;700&family=Raleway&family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    align-items: center;
    dislpay: flex;
    height: 100vh;
    background: #fff;
    justify-content: center;
    text-rendering: optimizeLegibility;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;
