import React from 'react';
import styled from 'styled-components';
import { rem, stripUnit, ellipsis } from 'polished';
import { themeGet } from '../../../utils/theme-helpers';

export enum TextTagEnum {
  p = 'p',
  span = 'span',
  strong = 'strong',
  em = 'em',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export interface TextProps {
  /** @default p */
  /** tag of text */
  tag?:
    | 'p'
    | 'span'
    | 'strong'
    | 'em'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6';
  /** content */
  children: React.ReactNode;
  /** if text should be uppercased */
  uppercase?: boolean;
  /** if text should be underlined */
  underline?: boolean;
  /** if text should be truncated... */
  truncate?: string;
}

const StyledText = styled.p<TextProps & { as: string }>`
  text-decoration: ${props => props.underline && 'underline'};
  text-transform: ${props => props.uppercase && 'uppercase'};
  ${props => props.truncate && ellipsis(props.truncate)};

  ${props => {
    if (props.as && props.as.startsWith('h')) {
      return `
        margin-top: ${themeGet('typography.textMargin')(props) * 1.2 * 1.5}px;
        line-height: ${themeGet('typography.headingLineHeight')(props)}em;
      `;
    }

    return `
      font-size: ${rem(themeGet('typography.fontSize')(props))};
      margin-bottom: ${themeGet('typography.textMargin')(props)}px;
      line-height: ${themeGet('typography.paragraphLineHeight')(props)}em;
    `;
  }}

  ${props => {
    const hFontSize = rem(themeGet('typography.headingFontSize')(props));
    const textMargin: any = stripUnit(themeGet('typography.textMargin')(props));

    if (props.as === TextTagEnum.h1) {
      return `
        font-size: ${hFontSize};
        margin-bottom: ${textMargin * 1.2}px;
      `;
    }
    if (props.as === TextTagEnum.h2) {
      return `
        font-size: ${(stripUnit(hFontSize) as number) / 1.3}rem;
        margin-bottom: ${(textMargin * 1.2) / 1.3}px;
      `;
    }
    if (props.as === TextTagEnum.h3) {
      return `
        font-size: ${(stripUnit(hFontSize) as number) / 1.5}rem;
        margin-bottom: ${(textMargin * 1.2) / 1.5}px;
      `;
    }
    if (props.as === TextTagEnum.h4) {
      return `
        font-size: ${(stripUnit(hFontSize) as number) / 1.7}rem;
        margin-bottom: ${(textMargin * 1.2) / 1.7}px;
      `;
    }
    if (props.as === TextTagEnum.h5) {
      return `
        font-size: ${(stripUnit(hFontSize) as number) / 1.8}rem;
        margin-bottom: ${(textMargin * 1.2) / 1.8}px;
      `;
    }
    if (props.as === TextTagEnum.h6) {
      return `
        font-size: ${(stripUnit(hFontSize) as number) / 2}rem;
        margin-bottom: ${(textMargin * 1.2) / 2}px;
      `;
    }

    return null;
  }};
`;

export const Text = ({
  tag = TextTagEnum.p,
  children,
  uppercase,
  underline,
  truncate,
  ...rest
}: TextProps &
  React.HTMLAttributes<
    HTMLParagraphElement | HTMLSpanElement | HTMLHeadingElement
  >) => {
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
