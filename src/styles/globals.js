import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font: 16px "Century Gothic", Futura, sans-serif;
    color: #eee;
  }

  body {  
    -webkit-font-smoothing: antialiased; 
    background: #282c34;
  }  
`;