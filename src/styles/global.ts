import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


  :root {
    --black: #000;
    --yellow: #ffc500;
  } 

  body {
    background: var(--black);
    padding: 0px 10px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input, button, h1, h2, h3, h4, h5, h6, strong, span, a { 
    font-family: 'Nunito', sans-serif;
  }

`;
