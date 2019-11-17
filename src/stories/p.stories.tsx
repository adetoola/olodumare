import React from 'react';
import { P } from 'components/typography/paragraph.component';

export default {
  component: P,
  title: 'Olodumare|Typography/Elements/P',
};

export const base = () => (
  <P>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam hic, minima
    molestias ratione quasi inventore exercitationem atque dolor ipsam
    asperiores vero, praesentium, obcaecati quidem omnis sapiente quae
    reiciendis magni assumenda!
  </P>
);
export const small = () => (
  <P size="small">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam hic, minima
    molestias ratione quasi inventore exercitationem atque dolor ipsam
    asperiores vero, praesentium, obcaecati quidem omnis sapiente quae
    reiciendis magni assumenda!
  </P>
);
export const lead = () => (
  <P size="lead">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam hic, minima
    molestias ratione quasi inventore exercitationem atque dolor ipsam
    asperiores vero, praesentium, obcaecati quidem omnis sapiente quae
    reiciendis magni assumenda!
  </P>
);
