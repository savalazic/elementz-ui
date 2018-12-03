import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { infoConfig } from '../../../utils/infoConfig';

import { Text } from './Text';

const stories = storiesOf('Elements|Text', module);
stories.addParameters(infoConfig);

stories
  .add('default', () => {
    const txt = text(
      'Content',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,dicta!',
    );
    return <Text>{txt}</Text>;
  })
  .add('span', () => {
    const txt = text(
      'Content',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,dicta!',
    );
    return <Text type="span">{txt}</Text>;
  })
  .add('bold', () => {
    const txt = text(
      'Content',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,dicta!',
    );
    return <Text type="strong">{txt}</Text>;
  })
  .add('italic', () => {
    const txt = text(
      'Content',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,dicta!',
    );
    return <Text type="em">{txt}</Text>;
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
    return (
      <div style={{ width: 150 }}>
        <Text truncate>{txt}</Text>
      </div>
    );
  });
