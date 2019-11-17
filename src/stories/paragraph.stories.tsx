import React from 'react';

import { storiesOf } from '@storybook/react';
import { P } from 'components/Typography/paragraph.component';

storiesOf('Paragraph', module).add(
  'default',
  () => <P>This is a paragraph</P>,
  {
    info: { inline: true }
  }
);
