import React from 'react';
import { H4 } from 'components/typography/heading.component';

export default {
  component: H4,
  title: 'Olodumare|Typography/Headings/H4',
};

export const normal = () => <H4>I am the new heading</H4>;
export const transform = () => (
  <H4 transform="uppercase">I am the new heading</H4>
);
export const color = () => <H4 color="primary">I am the new heading</H4>;
