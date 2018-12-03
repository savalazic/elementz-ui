import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import { Text } from '../Text';

describe('Text component', () => {
  const txt = 'This is mocked text';

  it('should match default snapshot', () => {
    const { container } = render(<Text>{txt}</Text>);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with underlined text', () => {
    const { container } = render(<Text underline>{txt}</Text>);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with uppercased text', () => {
    const { container } = render(<Text uppercase>{txt}</Text>);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with truncated text', () => {
    const { container } = render(<Text truncate>{txt}</Text>);
    expect(container).toMatchSnapshot();
  });

  it('should render paragraph without props', () => {
    const { container } = render(<Text>{txt}</Text>);
    expect(container).toHaveTextContent(txt);
  });
});
