import React, { Component } from 'react';

export interface ToggleState {
  on: boolean;
}

export interface ToggleProps {
  /** @default off */
  /** initial on */
  initialOn?: boolean;
  /** callback for toggling on/off */
  onToggle?: (on: boolean) => void;
  /** callback on resetting toggle */
  onReset?: (on: boolean) => void;
  /** content */
  children: (
    params: {
      on: boolean;
      toggle: (on: boolean) => void;
      reset: (on: boolean) => void;
    },
  ) => React.ReactNode;
}

class Toggle extends Component<ToggleProps, ToggleState> {
  public initialState = {
    on: this.props.initialOn || false,
  };

  public state = this.initialState;

  public reset = () => {
    this.setState(this.initialState, () => {
      if (this.props.onReset) {
        this.props.onReset(this.state.on);
      }
    });
  };

  public toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        if (this.props.onToggle) {
          this.props.onToggle(this.state.on);
        }
      },
    );
  };

  public render() {
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle,
      reset: this.reset,
    });
  }
}

export { Toggle };
