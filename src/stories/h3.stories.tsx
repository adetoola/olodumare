import React from 'react';
import { H3 } from 'components/typography/heading.component';

export default {
  component: H3,
  title: 'Olodumare|Typography/Headings/H3',
};

export const normal = () => <H3>I am the new heading</H3>;
export const transform = () => (
  <H3 transform="uppercase">I am the new heading</H3>
);
export const color = () => <H3 color="primary">I am the new heading</H3>;
