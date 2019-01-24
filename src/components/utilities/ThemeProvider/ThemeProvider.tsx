import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export interface ThemeProps {
  children: React.ReactNode;
  theme?: {
    default?: string;
    primary?: string;
    success?: string;
    warning?: string;
    danger?: string;
    typography?: {
      fontSize: number;
      headingFontSize: number;
      paragraphLineHeight: number;
      headingLineHeight: number;
      textMargin: number;
    };
  };
}

export const defaultTheme = {
  default: '#e1e1e1',
  primary: '#409eff',
  success: '#67c23a',
  warning: '#e6a23c',
  danger: '#f56c6c',
  colors: {
    default: '#e1e1e1',
    primary: '#409eff',
    success: '#67c23a',
    warning: '#e6a23c',
    danger: '#f56c6c',
  },
  typography: {
    fontSize: 16,
    headingFontSize: 40,
    paragraphLineHeight: 1.5,
    headingLineHeight: 1.25,
    textMargin: 20,
  },
};

export const ThemeProvider = ({
  theme = defaultTheme,
  children,
}: ThemeProps) => (
  <StyledThemeProvider theme={theme}>
    <React.Fragment>{children}</React.Fragment>
  </StyledThemeProvider>
);
