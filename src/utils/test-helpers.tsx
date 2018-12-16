import React from 'react';
import { render } from 'react-testing-library';

import {
  ThemeProvider,
  defaultTheme,
} from '../components/utilities/ThemeProvider/ThemeProvider';

export function renderWithTheme(component: any) {
  return render(
    <ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>,
  );
}
