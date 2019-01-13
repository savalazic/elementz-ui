import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { infoConfig } from '../../../utils/info-config';

import {
  Button,
  ButtonSizeEnum,
  ButtonTypeEnum,
  LoadingButton,
} from './Button';

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
  })
  .add('as anchor', () => {
    const txt = text('Text', 'Button');
    return (
      <Button href="https://github.com/savalazic/elementz-ui" target="_blank">
        {txt}
      </Button>
    );
  })
  .add('primary', () => {
    const txt = text('Text', 'Button');
    return (
      <Button type={ButtonTypeEnum.primary} onClick={action('onClick')}>
        {txt}
      </Button>
    );
  })
  .add('success', () => {
    const txt = text('Text', 'Button');
    return (
      <Button type={ButtonTypeEnum.success} onClick={action('onClick')}>
        {txt}
      </Button>
    );
  })
  .add('warning', () => {
    const txt = text('Text', 'Button');
    return (
      <Button type={ButtonTypeEnum.warning} onClick={action('onClick')}>
        {txt}
      </Button>
    );
  })
  .add('danger', () => {
    const txt = text('Text', 'Button');
    return (
      <Button type={ButtonTypeEnum.danger} onClick={action('onClick')}>
        {txt}
      </Button>
    );
  })
  .add('ghost primary', () => {
    const txt = text('Text', 'Button');
    return (
      <Button ghost type={ButtonTypeEnum.primary} onClick={action('onClick')}>
        {txt}
      </Button>
    );
  })
  .add('disabled', () => {
    const txt = text('Text', 'Button');
    return (
      <Button
        type={ButtonTypeEnum.primary}
        onClick={action('onClick')}
        disabled
      >
        {txt}
      </Button>
    );
  })
  .add('rounded', () => {
    const txt = text('Text', 'Button');
    return (
      <Button rounded onClick={action('onClick')}>
        {txt}
      </Button>
    );
  })
  .add('circle', () => {
    const size = text('Size', '50px');
    return (
      <Button circle={size} onClick={action('onClick')}>
        <span>👌🏻</span>
      </Button>
    );
  })
  .add('fluid', () => {
    const txt = text('Text', 'Button');
    return (
      <Button fluid onClick={action('onClick')}>
        {txt}
      </Button>
    );
  })
  .add('text', () => {
    const txt = text('Text', 'Button');
    return (
      <Button text onClick={action('onClick')}>
        {txt}
      </Button>
    );
  })
  .add('loading', () => {
    const txt = text('Text', 'Button');
    const loading = boolean('Is loading', true);
    return (
      <LoadingButton
        isLoading={loading}
        type={ButtonTypeEnum.primary}
        alignVertical
        onClick={action('onClick')}
      >
        {txt}
      </LoadingButton>
    );
  });
