import React, { Component } from 'react';
import styled from 'styled-components';
import FocusLock from 'react-focus-lock';

import { Portal } from './Portal';
import { ClickOutsideWrapper } from '../../wrappers';

export interface ModalProps {
  /** on click outside */
  handleClickOutside?: () => void;
  /** content */
  children: React.ReactNode;
}

// tslint:disable-next-line
const noop = () => {};

const StyledOverlay = styled.div`
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledModal = styled.div<ModalProps>`
  border: 5px solid orange;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
`;

export class Modal extends Component<ModalProps> {
  public render() {
    return (
      <Portal>
        <StyledOverlay>
          <FocusLock>
            <ClickOutsideWrapper
              onClickOutside={this.props.handleClickOutside || noop}
            >
              <StyledModal aria-modal="true" role="dialog" {...this.props}>
                {this.props.children}
              </StyledModal>
            </ClickOutsideWrapper>
          </FocusLock>
        </StyledOverlay>
      </Portal>
    );
  }
}
