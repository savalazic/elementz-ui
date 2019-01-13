import 'jest-dom/extend-expect';
import 'jest-styled-components';
import React from 'react';
import { fireEvent } from 'react-testing-library';

import { Button, LoadingButton } from '../Button';
import { renderWithTheme } from '../../../../utils/test-helpers';

describe('LoadingButton component', () => {
  const txt = 'Loading Button';

  it('should match default snapshot', () => {
    const { container } = renderWithTheme(<LoadingButton>{txt}</LoadingButton>);
    expect(container).toMatchSnapshot();
  });

  it('should match default snapshot with isLoading flag', () => {
    const { container } = renderWithTheme(
      <LoadingButton isLoading>{txt}</LoadingButton>,
    );
    expect(container).toMatchSnapshot();
  });
});

describe('Button component', () => {
  const txt = 'Button';

  it('should render button without props', () => {
    const { container } = renderWithTheme(
      <Button type="primary">{txt}</Button>,
    );
    expect(container).toHaveTextContent(txt);
  });

  it('should call handleClick', () => {
    const handleClick = jest.fn();

    const { getByText } = renderWithTheme(
      <Button onClick={handleClick}>{txt}</Button>,
    );
    fireEvent.click(getByText(txt));
    fireEvent.click(getByText(txt));
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('should match default snapshot', () => {
    const { container } = renderWithTheme(<Button>{txt}</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with `large` size prop', () => {
    const { container } = renderWithTheme(<Button size="large">{txt}</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with `small` size prop', () => {
    const { container } = renderWithTheme(<Button size="small">{txt}</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with `href` prop', () => {
    const { container } = renderWithTheme(
      <Button href="https://github.com/savalazic/elementz-ui">{txt}</Button>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with `primary` type prop', () => {
    const { container } = renderWithTheme(
      <Button type="primary">{txt}</Button>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with `success` type prop', () => {
    const { container } = renderWithTheme(
      <Button type="success">{txt}</Button>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with `warning` type prop', () => {
    const { container } = renderWithTheme(
      <Button type="warning">{txt}</Button>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with `danger` type prop', () => {
    const { container } = renderWithTheme(<Button type="danger">{txt}</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with `ghost` prop', () => {
    const { container } = renderWithTheme(<Button ghost>{txt}</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should match have specific styles with `ghost` prop', () => {
    const { container } = renderWithTheme(<Button ghost>{txt}</Button>);
    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      'transparent',
    );
  });

  it('should match snapshot with `disabled` prop', () => {
    const { container } = renderWithTheme(<Button disabled>{txt}</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with `rounded` prop', () => {
    const { container } = renderWithTheme(<Button rounded>{txt}</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with `circle` prop', () => {
    const { container } = renderWithTheme(<Button circle="50px">{txt}</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with `fluid` prop', () => {
    const { container } = renderWithTheme(<Button fluid>{txt}</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should match have specific styles with `fluid` prop', () => {
    const { container } = renderWithTheme(<Button fluid>{txt}</Button>);
    expect(container.firstChild).toHaveStyleRule('width', '100%');
  });

  it('should match snapshot with `text` prop', () => {
    const { container } = renderWithTheme(<Button text>{txt}</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with `alignVerical` prop', () => {
    const { container } = renderWithTheme(
      <Button alignVertical>
        <span>Test</span>
        <span>{txt}</span>
      </Button>,
    );
    expect(container).toMatchSnapshot();
  });
});
