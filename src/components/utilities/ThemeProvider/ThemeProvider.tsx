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
  };
}

export const defaultTheme = {
  default: '#e1e1e1',
  primary: '#409eff',
  success: '#67c23a',
  warning: '#e6a23c',
  danger: '#f56c6c',
};

export const ThemeProvider = ({
  theme = defaultTheme,
  children,
}: ThemeProps) => (
  <StyledThemeProvider theme={theme}>
    <React.Fragment>{children}</React.Fragment>
  </StyledThemeProvider>
);
