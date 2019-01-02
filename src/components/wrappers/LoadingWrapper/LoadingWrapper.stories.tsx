import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { infoConfig } from '../../../utils/info-config';

import { LoadingWrapper } from './LoadingWrapper';
import { Spinner } from '../..';

const stories = storiesOf('Wrappers|LoadingWrapper', module);

stories.addParameters(infoConfig);

stories.add('default', () => {
  const isLoadingValue = boolean('Is loading', true);

  return (
    <LoadingWrapper isLoading={isLoadingValue}>
      {({ isLoading }) => (
        <div>
          {isLoading && <Spinner color="black" />}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            temporibus placeat excepturi ex provident fugit ratione ab saepe
            culpa, repellendus unde explicabo repellat error reprehenderit
            consequatur quas eveniet alias quis?
          </p>
        </div>
      )}
    </LoadingWrapper>
  );
});
