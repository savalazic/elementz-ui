import React, { PureComponent } from 'react';

export interface ClickOutsideWrapperProps {
  /** function callback */
  onClickOutside: (event: any) => void;
}

export class ClickOutsideWrapper extends PureComponent<
  ClickOutsideWrapperProps
> {
  private wrapperRef: React.RefObject<any> = React.createRef();

  public handleClickOutside = (event: any) => {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.props.onClickOutside(event);
    }
  };

  public componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  public render() {
    const { children } = this.props;

    return <div ref={this.wrapperRef}>{children}</div>;
  }
}
