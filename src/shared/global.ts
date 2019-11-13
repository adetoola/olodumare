import { fontStyle } from './../components/fonts/index';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${fontStyle}
  ${normalize}
`;
