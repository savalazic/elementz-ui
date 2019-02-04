import React, { Component } from 'react';
import FocusLock from 'react-focus-lock';
// @ts-ignore
import transition from 'styled-transition-group';

import { Portal } from './Portal';
import { ClickOutsideWrapper } from '../../wrappers';

export interface ModalProps {
  /** open  */
  isOpen?: boolean;
  /** on click outside */
  handleClickOutside?: () => void;
  /** content */
  children: React.ReactNode;
}

// tslint:disable-next-line
const noop = () => {};

const StyledOverlay = transition.div`
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 300ms;

  &:enter {
    opacity: 0;
  }
  &:enter-active {
    opacity: 1;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0;
  }
`;

const StyledModal = transition.div<ModalProps>`
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;

  transition: transform 400ms;

  &:enter {
    transform: translate(-50%, -50%);
  }
  &:enter-active {
    transform: translate(-50%, -50%);
  }
  &:exit {
    transform: translate(-50%, -50%);
  }
  &:exit-active {
    transform: translate(-50%, -45%);
  }
`;

export class Modal extends Component<ModalProps> {
  public render() {
    return (
      <Portal>
        <StyledOverlay
          in={this.props.isOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          <FocusLock>
            <ClickOutsideWrapper
              onClickOutside={this.props.handleClickOutside || noop}
            >
              <StyledModal
                in={this.props.isOpen}
                timeout={400}
                mountOnEnter
                unmountOnExit
                aria-modal="true"
                role="dialog"
                {...this.props}
              >
                {this.props.children}
              </StyledModal>
            </ClickOutsideWrapper>
          </FocusLock>
        </StyledOverlay>
      </Portal>
    );
  }
}
