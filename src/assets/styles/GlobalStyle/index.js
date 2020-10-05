import { createGlobalStyle } from 'styled-components';

const GlobalStyle =  createGlobalStyle`

  /* RESET CSS */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #fefefe;

  &:hover {
    color: #f9f3f3;
  }
}

`;

export default GlobalStyle 
