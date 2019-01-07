import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import { LoadingWrapper } from '../LoadingWrapper';

describe('LoadingWrapper component', () => {
  it('should match default snapshot', () => {
    const { container } = render(
      <LoadingWrapper isLoading>
        {({ isLoading }) => <div>Loading..</div>}
      </LoadingWrapper>,
    );
    expect(container).toMatchSnapshot();
  });
});
