import React from 'react';

import { storiesOf } from '@storybook/react';

import { infoConfig } from '../../../utils/info-config';
import { ThemeProvider } from './ThemeProvider';

import { Button } from '../../elements';

const stories = storiesOf('Utilities|ThemeProvider', module);

stories.addParameters({
  info: {
    ...infoConfig.info,
    propTables: [ThemeProvider],
    propTablesExclude: [Button],
  },
});

stories.add('default', () => {
  const theme = {
    primary: 'blue',
  };

  return (
    <ThemeProvider theme={theme}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique
        labore eaque, officiis accusantium veniam voluptatibus libero. Sapiente
        optio voluptas accusamus. Qui ipsum recusandae maxime odio magnam
        delectus provident nisi?
      </p>
      <Button>Button</Button>
      <Button type="primary">Button</Button>
      <Button ghost disabled>
        Button
      </Button>
    </ThemeProvider>
  );
});
