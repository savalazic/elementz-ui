import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface SpinnerProps {
  /** color */
  color?: string;
  /** @default 50px */
  /** size */
  size?: string;
  /** @default 2px */
  /** stroke width */
  borderWidth?: string;
}

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div<SpinnerProps>`
  width: ${props => props.size};
  height: ${props => props.size};

  border: ${props => props.borderWidth} solid #eee;
  border-top: ${props => props.borderWidth} solid
    ${props => props.color || props.theme.primary};
  border-radius: 50%;

  animation: ${rotate} 1s infinite linear;
`;

export const Spinner = ({
  color,
  size = '50px',
  borderWidth = '2px',
}: SpinnerProps) => (
  <StyledSpinner size={size} borderWidth={borderWidth} color={color} />
);
