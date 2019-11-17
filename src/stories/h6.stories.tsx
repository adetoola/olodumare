import React from 'react';
import { H6 } from 'components/typography/heading.component';

export default {
  component: H6,
  title: 'Olodumare|Typography/Headings/H6',
};

export const normal = () => <H6>I am the new heading</H6>;
export const transform = () => (
  <H6 transform="uppercase">I am the new heading</H6>
);
export const color = () => <H6 color="primary">I am the new heading</H6>;
