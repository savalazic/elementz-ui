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
  .add('headings', () => {
    return (
      <div>
        <Text tag="h1">Heading 1</Text>
        <Text tag="h2">Heading 2</Text>
        <Text tag="h3">Heading 3</Text>
        <Text tag="h4">Heading 4</Text>
        <Text tag="h5">Heading 5</Text>
        <Text tag="h6">Heading 6</Text>
      </div>
    );
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
