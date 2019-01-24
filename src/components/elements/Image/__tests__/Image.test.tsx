import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import { Image, BackgroundImage } from '../Image';

describe('Image component', () => {
  const mockedSrc = 'https://source.unsplash.com/600x400/daily/?nature';
  const mockedAlt = 'mocked alt';

  it('should match default snapshot', () => {
    const { container } = render(<Image src={mockedSrc} alt={mockedAlt} />);
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with rounded prop', () => {
    const { container } = render(
      <Image src={mockedSrc} alt={mockedAlt} rounded="4px" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with circle prop', () => {
    const { container } = render(
      <Image src={mockedSrc} alt={mockedAlt} circle="50px" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with square prop', () => {
    const { container } = render(
      <Image src={mockedSrc} alt={mockedAlt} square="40px" />,
    );
    expect(container).toMatchSnapshot();
  });
});

describe('BackgroundImage component', () => {
  const mockedSrc = 'https://source.unsplash.com/600x400/daily/?nature';
  const componentChildren = (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sequi.
      </p>
    </div>
  );

  it('should match default snapshot', () => {
    const { container } = render(
      <BackgroundImage src={mockedSrc}>{componentChildren}</BackgroundImage>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with backgroundPosition prop of `top`', () => {
    const { container } = render(
      <BackgroundImage src={mockedSrc} backgroundPosition="top">
        {componentChildren}
      </BackgroundImage>,
    );
    expect(container).toMatchSnapshot();
  });
});
