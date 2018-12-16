import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import { ThemeProvider } from '../ThemeProvider';

describe('ThemeProvider', () => {
  it('should match default snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            ipsam voluptatibus expedita quo iure. Asperiores mollitia maiores
            voluptatum eum voluptate!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, sit.
          </p>
        </div>
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
