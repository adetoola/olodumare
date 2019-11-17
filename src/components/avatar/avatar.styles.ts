import { css } from 'styled-components';
import theme from 'styled-theming';

export const size = theme('size', {
  xs: '36px',
  sm: '48px',
  md: '72px',
  lg: '94px',
  xlg: '120px',
});

export const borderRadius = theme.variants('size', 'appearance', {
  circle: { xs: '50%', sm: '50%', md: '50%', lg: '50%', xlg: '50%' },
  square: { xs: '6px', sm: '8px', md: '10px', lg: '12px', xlg: '16px' },
});

export const borderSize = theme.variants('size', 'appearance', {
  round: {
    xs: '2px solid #fff',
    sm: '3px solid #fff',
    md: '4px solid #fff',
    lg: '4px solid #fff',
    xlg: '6px solid #fff',
  },
  square: {
    xs: '2px solid #fff',
    sm: '3px solid #fff',
    md: '4px solid #fff',
    lg: '4px solid #fff',
    xlg: '6px solid #fff',
  },
});

export const borderHelper = css`
  &:after {
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.1);
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: ${borderRadius};
    pointer-events: none;
  }
`;
