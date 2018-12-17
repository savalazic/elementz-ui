import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import { Spinner } from '../Spinner';

describe('Spinner component', () => {
  it('should match default snapshot', () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with width custom size', () => {
    const { container } = render(<Spinner size="50px" />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with width custom color', () => {
    const { container } = render(<Spinner color="#333" />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with custom stroke width', () => {
    const { container } = render(<Spinner strokeWidth={4} />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with custom stroke width', () => {
    const { container } = render(<Spinner strokeWidth={4} />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with `visible` prop', () => {
    const { container } = render(<Spinner visible={false} />);
    expect(container).toMatchSnapshot();
  });
});
