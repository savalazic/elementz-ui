import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { infoConfig } from '../../../utils/info-config';

import { Modal } from './Modal';
import { ModalBase } from './ModalBase';

const stories = storiesOf('Elements|Modal', module);

stories.addParameters(infoConfig);

stories.add('default', () => {
  const open = boolean('Is opened', true);

  return (
    <ModalBase initialOpen={open}>
      {({ isOpen, handleOpen, handleClose }) => (
        <div>
          <div>
            <button onClick={handleOpen}>open</button>
            <div style={{ height: '300px' }} />
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur culpa omnis quam rem nisi quis, atque eos reprehenderit
              ea sequi officia cum voluptas excepturi quod totam sint animi?
              Amet veniam, sunt ut facere voluptatum distinctio voluptates
              aspernatur molestias et consequatur maiores officia obcaecati
              ratione laudantium similique magnam repellat quod culpa eligendi
              ipsam placeat corporis nostrum exercitationem error! Cupiditate
              aut voluptates ab facere tempore nemo libero consequuntur!
              Repudiandae, itaque sunt fugiat molestiae vero exercitationem,
              voluptatem tenetur, inventore ipsum quae eum repellendus
              veritatis. Maxime assumenda dolore, quo tempora consequuntur ipsa
              atque fugit dolor amet, possimus accusamus, minima obcaecati
              dolorum nihil at tenetur!
            </p>
            <div style={{ height: '300px' }} />
            <hr />
          </div>
          {isOpen && (
            <Modal handleClickOutside={handleClose}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                laborum culpa nulla sed officia voluptatum itaque repellat, iste
                maiores aspernatur.
              </p>
              <button onClick={handleClose}>close</button>
            </Modal>
          )}
        </div>
      )}
    </ModalBase>
  );
});
