import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { infoConfig } from '../../../utils/info-config';

import { LoadingWrapper } from './LoadingWrapper';
import { Spinner } from '../../elements';

const stories = storiesOf('Wrappers|LoadingWrapper', module);

stories.addParameters(infoConfig);

stories
  .add('default', () => {
    const loading = boolean('Is loading', true);

    return (
      <LoadingWrapper isLoading={loading}>
        {({ isLoading }) => (
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              temporibus placeat excepturi ex provident fugit ratione ab saepe
              culpa, repellendus unde explicabo repellat error reprehenderit
              consequatur quas eveniet alias quis?
            </p>
            {isLoading && <Spinner />}
          </div>
        )}
      </LoadingWrapper>
    );
  })
  .add('example usage with overlay', () => {
    const loading = boolean('Is loading', true);

    const wrapperStyles: any = {
      position: 'relative',
      backgroundColor: loading ? 'rgba(0, 0, 0, 0.6)' : 'transparent',
    };

    const loaderStyles: any = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
    };

    return (
      <LoadingWrapper isLoading={loading}>
        {({ isLoading }) => (
          <div style={wrapperStyles}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              temporibus placeat excepturi ex provident fugit ratione ab saepe
              culpa, repellendus unde explicabo repellat error reprehenderit
              consequatur quas eveniet alias quis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas
              laboriosam enim aut officiis in amet hic at illum, quidem aliquid,
              accusantium a perspiciatis libero veritatis sed nobis voluptate
              doloribus dicta odio laudantium quis eligendi. Eaque officia, hic
              facilis, odit architecto minima modi fugit fuga vitae porro sequi
              molestiae iure?
            </p>
            {isLoading && (
              <div style={loaderStyles}>
                <Spinner />
                <p>loading...</p>
              </div>
            )}
          </div>
        )}
      </LoadingWrapper>
    );
  });
