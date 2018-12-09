import React from 'react';
import styled from 'styled-components';

export enum ButtonSizeEnum {
  normal = 'normal',
  small = 'small',
  large = 'large',
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default normal */
  /** button size */
  size?: 'normal' | 'small' | 'large';
  /** content */
  children: React.ReactNode;
}

const StyledButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: inherit;
  line-height: inherit;
  -webkit-appearance: none;

  font-size: ${(props: ButtonProps) => {
    if (props.size === ButtonSizeEnum.normal) {
      return '14px';
    }
    if (props.size === ButtonSizeEnum.small) {
      return '10px';
    }
    if (props.size === ButtonSizeEnum.large) {
      return '20px';
    }
    return;
  }};
`;

export const Button = ({
  children,
  size = ButtonSizeEnum.normal,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
