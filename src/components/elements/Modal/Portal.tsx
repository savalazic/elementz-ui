import React, { Component } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  /** children */
  children: React.ReactNode;
}

export class Portal extends Component<PortalProps> {
  public render() {
    return createPortal(this.props.children, document.body);
  }
}
