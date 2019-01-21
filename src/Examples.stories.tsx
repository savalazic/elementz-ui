import React from 'react';

import { storiesOf } from '@storybook/react';

import { defaultTheme, ThemeProvider, Button, Text } from './';

const stories = storiesOf('Examples|Showcase', module);

stories.addParameters({
  info: {
    disable: true,
  },
});

stories.add('default', () => {
  const theme = {
    primary: 'orange',
    colors: {
      primary: 'orange',
    },
    typography: {
      ...defaultTheme.typography,
      headingFontSize: 42,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Text truncate="100%" tag="h1">
        Welcome to examples
      </Text>

      <Text tag="h3">Typography</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique
        labore eaque, officiis accusantium{' '}
        <Text tag="em">veniam voluptatibus libero</Text>. Sapiente optio
        voluptas accusamus. Qui ipsum recusandae maxime odio magnam{' '}
        <Text tag="strong">delectus</Text> provident nisi?
      </Text>
      <Text>Lorem ipsum dolor sit amet.</Text>

      <Text tag="h3">Buttons</Text>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vero culpa
        molestiae, harum delectus sit vitae fuga quae aspernatur cupiditate
        aliquam ratione quam voluptatibus natus eaque quos illo odit aut, non
        voluptate inventore et doloremque architecto earum. Doloremque, totam
        pariatur? Quo, ex atque optio velit eligendi sequi voluptatibus rerum
        itaque.
      </Text>
      <Button>Button</Button>
      <Button type="primary">Button</Button>
      <Button ghost disabled>
        Button
      </Button>
    </ThemeProvider>
  );
});
