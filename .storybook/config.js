import { configure, addDecorator, addParameters } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { create } from '@storybook/theming';

import { WrapperDecorator } from './WrapperDecorator';

addDecorator(withInfo);
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'elementz-ui',
      brandUrl: 'https://github.com/savalazic/elementz-ui/',
      brandImage: 'https://www.svgrepo.com/show/77466/random-shape-outline.svg',
    }),
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
    panelPosition: 'right',
  },
});
addDecorator(withKnobs);
addDecorator(WrapperDecorator);

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  require('./Welcome.stories');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
