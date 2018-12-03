import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import { Text } from '../Text';

describe('Text component', () => {
  it('should render well', () => {
    const txt = 'Test text';
    const { container } = render(<Text>{txt}</Text>);
    expect(container).toHaveTextContent(txt);
  });
});
