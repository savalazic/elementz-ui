import React from 'react';

import { ThemeProvider } from '../src/components/utilities';

export const WrapperDecorator = storyFn => (
  <ThemeProvider>{storyFn()}</ThemeProvider>
);
