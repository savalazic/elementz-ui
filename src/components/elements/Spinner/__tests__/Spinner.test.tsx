import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import { Spinner } from '../Spinner';

describe('Spinner component', () => {
  it('should match default snapshot', () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot width custom size', () => {
    const { container } = render(<Spinner size="50px" />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot width custom color', () => {
    const { container } = render(<Spinner color="#333" />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot custom stroke width', () => {
    const { container } = render(<Spinner strokeWidth={4} />);
    expect(container).toMatchSnapshot();
  });
});
