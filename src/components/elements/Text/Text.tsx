import React from 'react';

export interface Props extends React.HTMLAttributes<any> {
  /** @default p */
  /** type of text */
  type?: 'p' | 'span' | 'strong' | 'em';
  /** text content */
  children: string;
  /** if text should be uppercased */
  uppercase?: boolean;
  /** if text should be underlined */
  underline?: boolean;
  /** if text should be truncated... */
  truncate?: boolean;
}

export const Text = ({
  type: Type = 'p',
  children,
  uppercase,
  underline,
  truncate,
  ...rest
}: Props) => {
  let styles: React.CSSProperties = {
    textDecoration: underline ? 'underline' : 'none',
    textTransform: uppercase ? 'uppercase' : 'none',
  };

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
