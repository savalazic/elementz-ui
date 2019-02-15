import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import { Toggle } from '../Toggle';

describe('Toggle component', () => {
  it('should match default snapshot', () => {
    const { container } = render(
      <Toggle>{({ on }) => <div>{on ? 'ON' : 'OFF'}</div>}</Toggle>,
    );
    expect(container).toMatchSnapshot();
  });
});
