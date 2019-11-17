import { fontStyle } from './../components/fonts/index';
import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

const bodyStyle = css`
  body {
    margin: 0;
    font-family: 'Proxima Nova', sans-serif;
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1.5;
    color: #12263f;
    text-align: left;
    background-color: #f9fbfd;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${fontStyle}
  ${normalize}
  ${bodyStyle}
`;
