import React from 'react';
import styled from 'styled-components';

import { truncateStyles } from '../../../utils/style-helpers';

export enum TextTagEnum {
  p = 'p',
  span = 'span',
  strong = 'strong',
  em = 'em',
}

export interface TextProps {
  /** @default p */
  /** tag of text */
  tag?: 'p' | 'span' | 'strong' | 'em';
  /** content */
  children: React.ReactNode;
  /** if text should be uppercased */
  uppercase?: boolean;
  /** if text should be underlined */
  underline?: boolean;
  /** if text should be truncated... */
  truncate?: string;
}

const StyledText = styled.p<TextProps>`
  text-decoration: ${props => props.underline && 'underline'};
  text-transform: ${props => props.uppercase && 'uppercase'};
  ${props => props.truncate && truncateStyles(props.truncate)};
`;

export const Text = ({
  tag = TextTagEnum.p,
  children,
  uppercase,
  underline,
  truncate,
  ...rest
}: TextProps &
  React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>) => {
  return (
    <StyledText
      as={tag}
      uppercase={uppercase}
      underline={underline}
      truncate={truncate}
      {...rest}
    >
      {children}
    </StyledText>
  );
};
