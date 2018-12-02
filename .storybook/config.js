import { configure, addDecorator } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';

addDecorator(withInfo);
addDecorator(
  withOptions({
    name: 'elementz-ui',
    url: 'https://github.com/savalazic/elementz-ui/',
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
  }),
);
addDecorator(withKnobs);

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  require('./Welcome.stories');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
