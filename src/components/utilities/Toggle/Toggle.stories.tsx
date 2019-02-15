/* tslint:disable:jsx-no-lambda */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { infoConfig } from '../../../utils/info-config';

import { Toggle } from './Toggle';
import { Button } from '../../elements';

const stories = storiesOf('Utilities|Toggle', module);
stories.addParameters(infoConfig);

stories.add('default', () => {
  return (
    <Toggle initialOn={false} onToggle={action('onToggle')}>
      {({ on, reset, toggle }) => (
        <div>
          <Button onClick={() => reset(on)}>Reset</Button>
          <Button type="primary" onClick={() => toggle(on)}>
            Toggle
          </Button>
          <p>{on ? 'ON' : 'OFF'}</p>
        </div>
      )}
    </Toggle>
  );
});
