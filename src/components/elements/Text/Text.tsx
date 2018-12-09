import React from 'react';
import styled from 'styled-components';

import { truncateStyles } from '../../../utils/style-helpers';

export enum TextTagEnum {
  p = 'p',
  span = 'span',
  strong = 'strong',
  em = 'em',
}

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  // extends React.HTMLProps<HTMLParagraphElement | HTMLSpanElement> {
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

const StyledText = styled(
  ({ tag = TextTagEnum.p, children, ...props }: TextProps) =>
    React.createElement(tag, props, children),
)`
  text-decoration: ${(props: TextProps) => {
    if (props.underline) {
      return 'underline';
    }
    if (props.uppercase) {
      return 'uppercase';
    }
    return;
  }};

  ${(props: TextProps) => props.truncate && truncateStyles(props.truncate)}
`;

export const Text = ({
  tag,
  children,
  uppercase,
  underline,
  truncate,
  ...rest
}: TextProps) => {
  return (
    <StyledText
      tag={tag}
      uppercase={uppercase}
      underline={underline}
      truncate={truncate}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

export default Text;
