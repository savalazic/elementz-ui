import React, { Component } from 'react';

export interface LoadingWrapperProps {
  /** loading state */
  isLoading: boolean;
  /** children */
  children: ((params: { isLoading: boolean }) => React.ReactNode);
}

export class LoadingWrapper extends Component<LoadingWrapperProps> {
  public render() {
    return this.props.children({
      isLoading: this.props.isLoading,
    });
  }
}
