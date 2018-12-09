import React from 'react';

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

export const Button = ({
  children,
  size = ButtonSizeEnum.normal,
  ...rest
}: ButtonProps) => {
  let fontSize;

  if (size === ButtonSizeEnum.normal) {
    fontSize = 14;
  }
  if (size === ButtonSizeEnum.small) {
    fontSize = 10;
  }
  if (size === ButtonSizeEnum.large) {
    fontSize = 20;
  }

  return (
    <button style={{ fontSize }} {...rest}>
      {children}
    </button>
  );
};

export default Button;
