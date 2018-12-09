import 'jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import { Button } from '../Button';

describe('Button component', () => {
  const txt = 'Button';

  it('should render button without props', () => {
    const { container } = render(<Button>{txt}</Button>);
    expect(container).toHaveTextContent(txt);
  });

  it('should call handleClick', () => {
    const handleClick = jest.fn();

    const { getByText } = render(<Button onClick={handleClick}>{txt}</Button>);
    fireEvent.click(getByText(txt));
    fireEvent.click(getByText(txt));
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('should match default snapshot', () => {
    const { container } = render(<Button>{txt}</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with `large` size prop', () => {
    const { container } = render(<Button size="large">{txt}</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with `small` size prop', () => {
    const { container } = render(<Button size="small">{txt}</Button>);
    expect(container).toMatchSnapshot();
  });
});
