import React from 'react';

import { Avatar } from 'components/avatar/avatar.component';

export default {
  component: Avatar,
  title: 'Olodumare|Avatar',
};

export const round = () => (
  <Avatar
    appearance="circle"
    source="https://randomuser.me/api/portraits/women/17.jpg"
    enableBorder
  />
);
