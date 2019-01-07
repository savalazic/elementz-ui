import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface SpinnerProps {
  /** color */
  color?: string;
  /** @default 50px */
  /** size */
  size?: string;
  /** @default 2 */
  /** stroke width */
  strokeWidth?: number;
  /** @default true */
  /** visibility */
  visible?: boolean;
}

export const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`;

const StyledSpinner = styled.div<SpinnerProps>`
  display: ${props => !props.visible && 'none'};
  position: relative;
  width: ${props => props.size};

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const StyledCircular = styled.svg`
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: ${rotate} 2000ms linear infinite;
`;

const StyledPath = styled.circle<SpinnerProps>`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke: ${props => props.color || props.theme.default};
  stroke-linecap: round;
  stroke-width: ${props => props.strokeWidth};
  animation: ${dash} 1500ms ease-in-out infinite;
`;

export const Spinner = ({
  color,
  size = '50px',
  strokeWidth = 2,
  visible = true,
}: SpinnerProps) => (
  <StyledSpinner size={size} visible={visible}>
    <StyledCircular viewBox="25 25 50 50">
      <StyledPath
        color={color}
        strokeWidth={strokeWidth}
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeMiterlimit="10"
      />
    </StyledCircular>
  </StyledSpinner>
);
