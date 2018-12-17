import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { infoConfig } from '../../../utils/info-config';

import { ClickOutsideWrapper } from './ClickOutsideWrapper';

const stories = storiesOf('Wrappers|ClickOutsideWrapper', module);

stories.addParameters(infoConfig);

stories.add('default', () => {
  return (
    <ClickOutsideWrapper onClickOutside={action('click outside wrapper')}>
      <div
        style={{
          padding: 30,
          backgroundColor: '#ddd',
        }}
      >
        <p style={{ textAlign: 'center' }}>Click outside this area</p>
      </div>
    </ClickOutsideWrapper>
  );
});
