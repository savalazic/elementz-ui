import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import {
  setDimensions,
  alignVertical,
  setDisabled,
} from '../../../utils/style-helpers';
import { getButtonColor } from './buttonHelpers';
import { LoadingWrapper } from '../../wrappers';
import { Spinner } from '../Spinner';

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
  /** align vertical - used if button has more elements */
  alignVertical?: boolean;
  /** href link */
  href?: any;
  /** content */
  children: React.ReactNode;
}

export interface LoadingButtonProps {
  /** loading state */
  isLoading?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  margin: 0;
  padding: 0.6em 1.3em 0.6em;
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
  position: relative;

  color: ${props =>
    (props.ghost && (props.type && props.theme[props.type])) || 'white'};
  color: ${props =>
    !props.ghost && props.type === ButtonTypeEnum.default && 'black'};
  color: ${props => props.text && props.theme.primary};

  background-color: ${props =>
    getButtonColor({ theme: props.theme, type: props.type })};
  background-color: ${props => props.ghost && 'transparent'};
  background-color: ${props => props.text && 'transparent'};

  border: ${props =>
    props.ghost &&
    `1px solid ${getButtonColor({ theme: props.theme, type: props.type })}`};

  border-radius: ${props => props.rounded && '20px'};
  border-radius: ${props => props.circle && '50%'};

  width: ${props => props.fluid && '100%'};

  ${props => props.alignVertical && alignVertical()}

  ${props => props.circle && setDimensions(props.circle, props.circle)}
  padding: ${props => props.circle && '0px'};
  line-height: ${props => props.circle && '100%'};

  ${props => props.disabled && setDisabled()};

  font-size: ${props => {
    if (props.size === ButtonSizeEnum.normal) {
      return '1rem';
    }
    if (props.size === ButtonSizeEnum.small) {
      return '0.8rem';
    }
    if (props.size === ButtonSizeEnum.large) {
      return '1.2rem';
    }
    return;
  }};

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

const StyledLoadingButton = styled(StyledButton)<LoadingButtonProps>`
  ${props => props.isLoading && setDisabled()};
  overflow: hidden;
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
  alignVertical: alignVerticalProp,
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
      alignVertical={alignVerticalProp}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export const LoadingButton = ({
  isLoading: isLoadingProp = false,
  children,
  ...rest
}: LoadingButtonProps &
  ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <LoadingWrapper isLoading={isLoadingProp}>
    {({ isLoading }) => (
      <StyledLoadingButton isLoading={isLoading} {...rest}>
        {isLoading ? <Spinner size="15px" /> : <span>{children}</span>}
      </StyledLoadingButton>
    )}
  </LoadingWrapper>
);
