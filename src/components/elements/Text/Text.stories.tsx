import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { infoConfig } from '../../../utils/info-config';

import { Text, TextTagEnum } from './Text';

const stories = storiesOf('Elements|Text', module);
stories.addParameters(infoConfig);

stories
  .add('default', () => {
    const txt = text(
      'Content',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    );
    return <Text>{txt}</Text>;
  })
  .add('span', () => {
    const txt = text(
      'Content',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,dicta!',
    );
    return <Text tag={TextTagEnum.span}>{txt}</Text>;
  })
  .add('bold', () => {
    const txt = text(
      'Content',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,dicta!',
    );
    return <Text tag={TextTagEnum.strong}>{txt}</Text>;
  })
  .add('italic', () => {
    const txt = text(
      'Content',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,dicta!',
    );
    return <Text tag={TextTagEnum.em}>{txt}</Text>;
  })
  .add('uppercase', () => {
    const txt = text(
      'Content',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,dicta!',
    );
    return <Text uppercase>{txt}</Text>;
  })
  .add('underline', () => {
    const txt = text(
      'Content',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,dicta!',
    );
    return <Text underline>{txt}</Text>;
  })
  .add('truncate', () => {
    const txt = text(
      'Content',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,dicta!',
    );
    return <Text truncate="250px">{txt}</Text>;
  })
  .add('truncate with wrapping element', () => {
    const txt = text(
      'Content',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,dicta!',
    );
    return (
      <div style={{ width: '150px' }}>
        <Text truncate="100%">{txt}</Text>
      </div>
    );
  });
