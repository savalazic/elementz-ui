import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { setDimensions } from '../../../utils/style-helpers';
import { getButtonColor } from './buttonHelpers';

export enum ButtonSizeEnum {
  normal = 'normal',
  small = 'small',
  large = 'large',
}

export enum ButtonTypeEnum {
  default = 'default',
  primary = 'primary',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}

export interface ButtonProps {
  /** @default normal */
  /** button size */
  size?: 'normal' | 'small' | 'large';
  /** button type */
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  /** ghost */
  ghost?: boolean;
  /** rounded */
  rounded?: boolean;
  /** circle */
  circle?: string;
  /** fluid */
  fluid?: boolean;
  /** text */
  text?: boolean;
  /** loading */
  loading?: boolean;
  /** href link */
  href?: any;
  /** content */
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  margin: 0;
  padding: 8px 20px;
  width: auto;
  overflow: visible;
  font: inherit;
  text-decoration: none;
  text-align: center;
  line-height: inherit;
  -webkit-appearance: none;
  outline: none;
  user-select: none;
  cursor: pointer;

  color: ${props =>
    (props.ghost && (props.type && props.theme[props.type])) || 'white'};
  color: ${props =>
    !props.ghost && props.type === ButtonTypeEnum.default && 'black'};
  color: ${props => props.text && props.theme.primary};

  background-color: ${props =>
    getButtonColor({ theme: props.theme, type: props.type })};
  background-color: ${props => props.ghost && 'transparent'};
  background-color: ${props => props.text && 'transparent'};

  opacity: ${props => (props.disabled || props.loading) && 0.7};

  border: ${props =>
    props.ghost &&
    `1px solid ${getButtonColor({ theme: props.theme, type: props.type })}`};

  border-radius: ${props => props.rounded && '20px'};
  border-radius: ${props => props.circle && '50%'};

  width: ${props => props.fluid && '100%'};

  ${props => props.circle && setDimensions(props.circle, props.circle)}
  padding: ${props => props.circle && '0px'};
  line-height: ${props => props.circle && '100%'};

  font-size: ${props => {
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

  pointer-events: ${props => (props.disabled || props.loading) && 'none'};

  transition: background-color 200ms, color 200ms;

  &:hover {
    background-color: ${props =>
      !props.ghost
        ? darken(0.1, getButtonColor({ theme: props.theme, type: props.type }))
        : getButtonColor({ theme: props.theme, type: props.type })};
    background-color: ${props => props.text && 'transparent'};
    color: ${props => props.ghost && 'white'};
    color: ${props => props.text && darken(0.1, props.theme.primary)}
  }

  &:focus {
    background-color: ${props =>
      lighten(0.05, getButtonColor({ theme: props.theme, type: props.type }))};
    background-color: ${props => props.text && 'transparent'};
    color: ${props => props.ghost && 'white'};
    color: ${props => props.text && lighten(0.05, props.theme.primary)}
  }

  &:active {
    background-color: ${props =>
      darken(0.1, getButtonColor({ theme: props.theme, type: props.type }))};
    background-color: ${props => props.text && 'transparent'};
    color: ${props => props.ghost && 'white'};
    color: ${props => props.text && lighten(0.05, props.theme.primary)}
  }
`;

export const Button = ({
  children,
  href,
  rounded,
  circle,
  fluid,
  ghost,
  type = 'default',
  disabled,
  text,
  loading,
  size = ButtonSizeEnum.normal,
  ...rest
}: ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <StyledButton
      as={href && 'a'}
      href={href}
      size={size}
      type={type}
      rounded={rounded}
      circle={circle}
      ghost={ghost}
      fluid={fluid}
      disabled={disabled}
      text={text}
      loading={loading}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
