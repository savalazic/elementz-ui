import React, { Component } from 'react';
import styled from 'styled-components';
import { Spinner } from '../../elements';

export interface LoadingWrapperProps {
  /** loading state */
  isLoading: boolean;
  /** children */
  children: (params: { isLoading: boolean }) => React.ReactNode;
}

const StyledLoadingWrapper = styled.div<LoadingWrapperProps>``;

export class LoadingWrapper extends Component<LoadingWrapperProps> {
  public state = {
    isLoading: this.props.isLoading,
  };

  public render() {
    return this.props.children({
      isLoading: this.state.isLoading,
    });
    // return (
    //   <StyledLoadingWrapper isLoading={this.state.isLoading}>
    //     {this.props.children}
    //   </StyledLoadingWrapper>
    // );
  }
}

// export const LoadingWrapper = ({
//   children,
//   isLoading,
// }: LoadingWrapperProps) => {
//   return (
//     <StyledLoadingWrapper isLoading={isLoading}>
//       <Spinner visible={isLoading} />
//       {children}
//     </StyledLoadingWrapper>
//   );
// };

export default LoadingWrapper;
