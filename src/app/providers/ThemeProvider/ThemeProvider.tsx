import { createTheme, ThemeProvider } from '@mui/material/styles';

import type { FCProps } from 'app/types';

export const theme = createTheme({
  palette: {
    secondary: {
      main: '#e10098;',
    },
  },
});

export const Palette = ({ children }: FCProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
