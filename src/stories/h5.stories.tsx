import React from 'react';
import { H5 } from 'components/typography/heading.component';

export default {
  component: H5,
  title: 'Olodumare|Typography/Headings/H5',
};

export const normal = () => <H5>I am the new heading</H5>;
export const transform = () => (
  <H5 transform="uppercase">I am the new heading</H5>
);
export const color = () => <H5 color="primary">I am the new heading</H5>;
