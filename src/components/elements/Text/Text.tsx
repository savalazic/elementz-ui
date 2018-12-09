import React from 'react';

export enum TextTypeEnum {
  p = 'p',
  span = 'span',
  strong = 'strong',
  em = 'em',
}

export interface TextProps
  extends React.HTMLProps<HTMLParagraphElement | HTMLSpanElement> {
  /** @default p */
  /** type of text */
  type?: 'p' | 'span' | 'strong' | 'em';
  /** content */
  children: React.ReactNode;
  /** if text should be uppercased */
  uppercase?: boolean;
  /** if text should be underlined */
  underline?: boolean;
  /** if text should be truncated... */
  truncate?: boolean;
}

export const Text = ({
  type: Type = TextTypeEnum.p,
  children,
  uppercase,
  underline,
  truncate,
  ...rest
}: TextProps) => {
  let styles: React.CSSProperties = {};

  if (underline) {
    styles = {
      ...styles,
      textDecoration: 'underline',
    };
  }

  if (uppercase) {
    styles = {
      ...styles,
      textTransform: 'uppercase',
    };
  }

  if (truncate) {
    styles = {
      ...styles,
      display: 'block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    };
  }

  return (
    <Type style={styles} {...rest}>
      {children}
    </Type>
  );
};

export default Text;
