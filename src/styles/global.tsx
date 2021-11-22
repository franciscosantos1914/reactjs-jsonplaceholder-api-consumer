import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body, #root{
    min-height: 100%;
  }
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --webkit-font-smoothing: antialised;
    background: #312E38;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
  }
`;
