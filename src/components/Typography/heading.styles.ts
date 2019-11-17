import { css } from 'styled-components';
import { math } from 'polished';
import { gray900 } from 'components/color';

const spacer = '1.5rem';

export const marginBottom = math(`${spacer} * 0.75`);
const fontFamily = "'Proxima Nova', sans-serif";
const fontStyle = null;
const fontWeight = 600;
const lineHeight = 1.1;
const color = gray900; // 'inherit';
const letterSpacing = '-.02em';

export const styles = css`
  margin-top: 0;
  margin-bottom: ${marginBottom};
  font-family: ${fontFamily};
  font-style: ${fontStyle};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  color: ${color};
  letter-spacing: ${letterSpacing};
  > a {
    color: inherit;
  }
`;
