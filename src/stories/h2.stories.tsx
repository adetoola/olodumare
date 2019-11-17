import React from 'react';
import { H2 } from 'components/typography/heading.component';

export default {
  component: H2,
  title: 'Olodumare|Typography/Headings/H2',
};

export const normal = () => <H2>I am the new heading</H2>;
export const transform = () => (
  <H2 transform="uppercase">I am the new heading</H2>
);
export const color = () => <H2 color="primary">I am the new heading</H2>;
