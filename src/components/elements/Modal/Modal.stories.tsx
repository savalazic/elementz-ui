import React from 'react';

import { storiesOf } from '@storybook/react';

import { infoConfig } from '../../../utils/info-config';

import { Button } from '../Button';
import { Modal } from './Modal';
import { ModalBase } from './ModalBase';

const stories = storiesOf('Elements|Modal', module);

stories.addParameters(infoConfig);

stories
  .add('default', () => {
    return (
      <ModalBase initialOpen>
        {({ isOpen, handleOpen, handleClose }) => (
          <div>
            <div>
              <Button onClick={handleOpen}>Open</Button>
            </div>
            <Modal handleClickOutside={handleClose} isOpen={isOpen}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                laborum culpa nulla sed officia voluptatum itaque repellat, iste
                maiores aspernatur.
              </p>
              <Button onClick={handleClose}>Close</Button>
            </Modal>
          </div>
        )}
      </ModalBase>
    );
  })
  .add('with custom transition', () => (
    <ModalBase>
      {({ isOpen, handleOpen, handleClose }) => (
        <div>
          <div>
            <Button onClick={handleOpen}>Open</Button>
          </div>
          <Modal
            handleClickOutside={handleClose}
            isOpen={isOpen}
            transition={{
              speed: 1000,
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              laborum culpa nulla sed officia voluptatum itaque repellat, iste
              maiores aspernatur.
            </p>
            <Button onClick={handleClose}>Close</Button>
          </Modal>
        </div>
      )}
    </ModalBase>
  ));
