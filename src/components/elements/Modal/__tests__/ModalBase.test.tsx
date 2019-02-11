import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import { ModalBase, Modal } from '../';

describe('ModalBase component', () => {
  it('should match default snapshot', () => {
    const { container } = render(
      <ModalBase initialOpen>
        {({ isOpen, handleOpen, handleClose }) => (
          <div>
            <div>
              <button onClick={handleOpen}>Open</button>
            </div>
            <Modal handleClickOutside={handleClose} isOpen={isOpen}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                laborum culpa nulla sed officia voluptatum itaque repellat, iste
                maiores aspernatur.
              </p>
              <button onClick={handleClose}>Close</button>
            </Modal>
          </div>
        )}
      </ModalBase>,
    );
    expect(container).toMatchSnapshot();
  });
});
