import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import { ClickOutsideWrapper } from '../ClickOutsideWrapper';

describe('ClickOutsideWrapper', () => {
  const handleClick = jest.fn();

  it('should match default snapshot', () => {
    const { container } = render(
      <ClickOutsideWrapper onClickOutside={handleClick} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should not call handleClick when user clicks inside wrapper', () => {
    const { getByTestId } = render(
      <ClickOutsideWrapper onClickOutside={handleClick}>
        <div data-testid="area">
          <p>Click outside this area</p>
        </div>
      </ClickOutsideWrapper>,
    );
    fireEvent.click(getByTestId('area'));
    fireEvent.click(getByTestId('area'));
    fireEvent.click(getByTestId('area'));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it('should call handleClick when user clicks outside wrapper', () => {
    const { getByTestId } = render(
      <div>
        <ClickOutsideWrapper onClickOutside={handleClick}>
          <div>
            <p>Click outside this area</p>
          </div>
        </ClickOutsideWrapper>
        <div data-testid="area">
          <p>Click here</p>
        </div>
      </div>,
    );
    fireEvent.mouseDown(getByTestId('area'));
    fireEvent.mouseDown(getByTestId('area'));
    fireEvent.mouseDown(getByTestId('area'));
    expect(handleClick).toHaveBeenCalledTimes(3);
  });
});
