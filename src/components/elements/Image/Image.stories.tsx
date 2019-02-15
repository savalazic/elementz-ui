import React from 'react';
import { storiesOf } from '@storybook/react';

import { infoConfig } from '../../../utils/info-config';

import { Image, BackgroundImage } from './Image';
import { Text } from '../Text';

const stories = storiesOf('Elements|Image', module);
stories.addParameters(infoConfig);

stories
  .add('default', () => {
    return (
      <Image
        src="https://source.unsplash.com/600x400/daily/?nature"
        alt="Image from unsplash"
      />
    );
  })
  .add('rounded', () => {
    return (
      <Image
        src="https://source.unsplash.com/600x400/daily/?nature"
        alt="Image from unsplash"
        rounded="30px"
      />
    );
  })
  .add('circle', () => {
    return (
      <Image
        src="https://source.unsplash.com/600x400/daily/?nature"
        alt="Image from unsplash"
        circle="200px"
      />
    );
  })
  .add('square', () => {
    return (
      <Image
        src="https://source.unsplash.com/600x400/daily/?people"
        alt="Image from unsplash"
        square="200px"
      />
    );
  })
  .add('as background image', () => {
    return (
      <BackgroundImage
        src="https://source.unsplash.com/600x400/daily/?nature"
        style={{ padding: 40, color: 'white' }}
      >
        <Text tag="h2">Heading</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          veritatis non natus ipsum soluta voluptas, tempore voluptate saepe
          harum vel ea, recusandae eveniet? Beatae ipsa unde cupiditate iusto
          accusamus aspernatur!
        </Text>
      </BackgroundImage>
    );
  });
