import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';
import { math } from 'polished';

import { gray900 } from 'components/color';

export const fontSizeBase = '0.9375rem'; // 15px
export const fontSizeLg = math(`${fontSizeBase} * 1.133333333334`); // 17px
export const fontSizeSm = math(`${fontSizeBase} * 0.866666667`); // 13px
type Size = 'base' | 'small' | 'lead';

export interface ParagraphProps {
  color?: string;
  size?: Size;
  children: React.ReactNode;
}

export const themeSize = theme('size', {
  lead: fontSizeLg,
  base: fontSizeBase,
  small: fontSizeSm,
});

const Paragraph = styled.p<ParagraphProps>`
  color: ${props => props.color || gray900};
  font-size: ${themeSize};
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const P: React.FC<ParagraphProps> = (props: ParagraphProps) => (
  <ThemeProvider theme={{ size: props.size }}>
    <Paragraph {...props}>{props.children}</Paragraph>
  </ThemeProvider>
);
P.defaultProps = {
  color: 'primary',
  size: 'base' as Size,
};
