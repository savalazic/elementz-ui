import React from 'react';

import { storiesOf } from '@storybook/react';

import { infoConfig } from '../../../utils/infoConfig';

import { Grid } from './Grid';

const stories = storiesOf('Layout|Grid', module);
stories.addParameters(infoConfig);

stories.add('with text', () => <Grid test="test" />);
