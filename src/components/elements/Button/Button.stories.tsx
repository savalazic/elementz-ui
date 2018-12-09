import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { infoConfig } from '../../../utils/infoConfig';

import { Button, ButtonSizeEnum } from './Button';

const stories = storiesOf('Elements|Button', module);

stories.addParameters(infoConfig);

stories
  .add('default', () => {
    const txt = text('Text', 'Button');
    return <Button onClick={action('onClick')}>{txt}</Button>;
  })
  .add('large', () => {
    const txt = text('Text', 'Button');
    return (
      <Button size={ButtonSizeEnum.large} onClick={action('onClick')}>
        {txt}
      </Button>
    );
  })
  .add('small', () => {
    const txt = text('Text', 'Button');
    return (
      <Button size={ButtonSizeEnum.small} onClick={action('onClick')}>
        {txt}
      </Button>
    );
  });
