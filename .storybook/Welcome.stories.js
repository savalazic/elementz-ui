import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Welcome', module);

stories.addParameters({
  info: {
    disable: true,
  },
});

stories.add('to elementz-ui', () => (
  <div>
    <h1>Welcome to elementz-ui</h1>
    <p>
      This is a component dev environment for the{' '}
      <a href="http://github.com/savalazic/elementz-ui/" target="_blank">
        elementz-ui
      </a>
    </p>
  </div>
));
