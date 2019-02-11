import React, { Component } from 'react';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import { Portal } from './Portal';
import { ClickOutsideWrapper } from '../../wrappers';

type TransitionState = 'entering' | 'entered' | 'exiting' | 'exited';
interface TransitionProps {
  state: TransitionState;
}

export interface ModalProps {
  /** open  */
  isOpen?: boolean;
  /** on click outside */
  handleClickOutside?: () => void;
  /** content */
  children: React.ReactNode;
  /** transition settings */
  transition: {
    speed: number;
  };
}

// tslint:disable-next-line
const noop = () => {};

const opacityMap = {
  entering: 0,
  entered: 1,
  exiting: 0,
  exited: 0,
};

const transformMap = {
  entering: 'translate(-50%, -45%)',
  entered: 'translate(-50%, -50%)',
  exiting: 'translate(-50%, -45%)',
  exited: 'translate(-50%, -45%)',
};

const StyledOverlay = styled.div<ModalProps & TransitionProps>`
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  transition: all ${props => props.transition.speed}ms;
  opacity: ${(props: TransitionProps) => opacityMap[props.state]};
`;

const StyledModal = styled.div<ModalProps & TransitionProps>`
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;

  transition: all ${props => props.transition.speed}ms;
  transform: ${(props: TransitionProps) => transformMap[props.state]};
`;

export class Modal extends Component<ModalProps> {
  public static defaultProps = {
    transition: {
      speed: 300,
    },
  };

  public render() {
    return (
      <Portal>
        <Transition
          in={this.props.isOpen}
          timeout={this.props.transition.speed}
          mountOnEnter
          unmountOnExit
        >
          {(state: TransitionState) => (
            <StyledOverlay
              state={state}
              transition={{ speed: this.props.transition.speed }}
            >
              <FocusLock>
                <ClickOutsideWrapper
                  onClickOutside={this.props.handleClickOutside || noop}
                >
                  <StyledModal
                    state={state}
                    transition={{ speed: this.props.transition.speed }}
                    aria-modal="true"
                    role="dialog"
                    {...this.props}
                  >
                    {this.props.children}
                  </StyledModal>
                </ClickOutsideWrapper>
              </FocusLock>
            </StyledOverlay>
          )}
        </Transition>
      </Portal>
    );
  }
}
