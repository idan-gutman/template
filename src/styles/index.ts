import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: overlay;
    scroll-behavior: smooth;
  }

  #root {
    height: inherit;
  }

  *, *:before, *:after {
  box-sizing: inherit;
  }
  
  body {
    margin: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  p,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }

  li {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
