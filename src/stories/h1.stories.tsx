import React from 'react';
import { H1, H2, H3 } from 'components/typography/heading.component';

export default {
  component: H1,
  title: 'Olodumare|Typography/Headings/H1',
};

export const normal = () => <H1>I am the new heading</H1>;
export const transform = () => (
  <H1 transform="uppercase">I am the new heading</H1>
);
export const color = () => <H1 color="primary">I am the new heading</H1>;
