import React from 'react';

import { storiesOf } from '@storybook/react';

import { infoConfig } from '../../../utils/info-config';

import { Spinner } from './Spinner';

const stories = storiesOf('Elements|Spinner', module);

stories.addParameters(infoConfig);

stories
  .add('default', () => {
    return <Spinner />;
  })
  .add('with custom size', () => {
    return <Spinner size="200px" />;
  })
  .add('with custom color', () => {
    return <Spinner color="#f50" />;
  })
  .add('with custom border width', () => {
    return <Spinner borderWidth="6px" />;
  });
