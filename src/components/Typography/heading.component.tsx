import React from 'react';
import styled from 'styled-components';
import { math } from 'polished';

import { styles, marginBottom } from './heading.styles';

const fontSizes = {
  h1: '1.625rem',
  h2: '1.25rem',
  h3: '1.0625rem',
  h4: '0.9375rem',
  h5: '0.8125rem',
  h6: '0.625rem',
};

type HeadingColors = 'primary' | 'secondary' | 'muted' | 'success' | 'danger';
type HeadingTransform =
  | 'lowercase'
  | 'uppercase'
  | 'capitalize'
  | 'none'
  | 'inherit';

export interface HeadingProps {
  color?: HeadingColors;
  transform?: HeadingTransform;
  children: React.ReactNode;
}

type HeadingType = {
  color?: HeadingColors;
  transform?: HeadingTransform;
};

const Heading1 = styled.h1<HeadingType>`
  ${styles};
  font-size: ${fontSizes.h1};
  text-transform: ${p => (p.transform ? p.transform : 'initial')};
`;
const Heading2 = styled.h2<HeadingType>`
  ${styles};
  font-size: ${fontSizes.h2};
  text-transform: ${p => (p.transform ? p.transform : 'initial')};
`;
const Heading3 = styled.h3<HeadingType>`
  ${styles};
  font-size: ${fontSizes.h3};
  text-transform: ${p => (p.transform ? p.transform : 'initial')};

  margin-bottom: ${math(`${marginBottom} * 0.75`)};
`;
const Heading4 = styled.h4<HeadingType>`
  ${styles};
  font-size: ${fontSizes.h4};
  text-transform: ${p => (p.transform ? p.transform : 'initial')};

  margin-bottom: ${math(`${marginBottom} * 0.5`)};
`;
const Heading5 = styled.h5<HeadingType>`
  ${styles};
  font-size: ${fontSizes.h5};
  text-transform: ${p => (p.transform ? p.transform : 'initial')};

  margin-bottom: ${math(`${marginBottom} * 0.5`)};
`;

const Heading6 = styled.h6<HeadingType>`
  ${styles};
  font-size: ${fontSizes.h6};
  text-transform: ${p => (p.transform ? p.transform : 'initial')};

  letter-spacing: 0.08em;
  margin-bottom: ${math(`${marginBottom} * 0.5`)};
`;

export const H1 = (props: HeadingProps) => (
  <Heading1 {...props}>{props.children}</Heading1>
);
export const H2 = (props: HeadingProps) => (
  <Heading2 {...props}>{props.children}</Heading2>
);
export const H3 = (props: HeadingProps) => (
  <Heading3 {...props}>{props.children}</Heading3>
);
export const H4 = (props: HeadingProps) => (
  <Heading4 {...props}>{props.children}</Heading4>
);
export const H5 = (props: HeadingProps) => (
  <Heading5 {...props}>{props.children}</Heading5>
);
export const H6 = (props: HeadingProps) => (
  <Heading6 {...props}>{props.children}</Heading6>
);

H1.defaultProps = {
  color: 'primary' as HeadingColors,
  transform: 'inherit' as HeadingTransform,
};
H2.defaultProps = {
  color: 'primary' as HeadingColors,
  transform: 'inherit' as HeadingTransform,
};
H3.defaultProps = {
  color: 'primary' as HeadingColors,
  transform: 'inherit' as HeadingTransform,
};
H4.defaultProps = {
  color: 'primary' as HeadingColors,
  transform: 'inherit' as HeadingTransform,
};
H5.defaultProps = {
  color: 'primary' as HeadingColors,
  transform: 'inherit' as HeadingTransform,
};
H6.defaultProps = {
  color: 'primary' as HeadingColors,
  transform: 'inherit' as HeadingTransform,
};
