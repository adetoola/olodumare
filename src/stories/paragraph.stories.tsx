import React from 'react';

import { storiesOf } from '@storybook/react';
import { Paragraph } from 'components/Typography/paragraph.component';

storiesOf('Paragraph', module).add(
  'default',
  () => <Paragraph>This is a paragraph</Paragraph>,
  {
    info: { inline: true }
  }
);
