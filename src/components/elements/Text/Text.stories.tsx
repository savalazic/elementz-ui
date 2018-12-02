import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { infoConfig } from '../../../utils/infoConfig';

import { Text } from './Text';

const stories = storiesOf('Elements|Text', module);
stories.addParameters(infoConfig);

stories
  .add('with text', () => <Text />)
  .add('with shit', () => {
    const txt = text('testss', 'asdasda');
    return <Text text={txt} />;
  });
