import { css } from "@emotion/react";

const GlobalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
    background-color: white;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display: none;
  }
`;

export default GlobalStyle;
