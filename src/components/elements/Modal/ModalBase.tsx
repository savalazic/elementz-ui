import React, { Component } from 'react';

export interface ModalBaseState {
  isOpen: boolean;
}

export interface ModalBaseProps {
  /** @default false */
  /** initial open state */
  initialOpen?: boolean;
  /** handle modal open  */
  handleOpen?: () => void;
  /** handle modal close */
  handleClose?: () => void;
  /** children */
  children: ((
    params: {
      isOpen: boolean;
      handleOpen: () => void;
      handleClose: () => void;
    },
  ) => React.ReactNode);
}

const ESC_KEY = 27;

export class ModalBase extends Component<ModalBaseProps, ModalBaseState> {
  public state = {
    isOpen: this.props.initialOpen || false,
  };

  public componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  public componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  private onKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === ESC_KEY) {
      this.handleClose();
    }
  };

  private handleOpen = () => {
    this.setState({ isOpen: true });
  };

  private handleClose = () => {
    this.setState({ isOpen: false });
  };

  public render() {
    return this.props.children({
      isOpen: this.state.isOpen,
      handleOpen: this.handleOpen,
      handleClose: this.handleClose,
    });
  }
}
