'use client';

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create your custom theme
// const theme = createTheme({
//   palette: {
//     mode: 'light', // change to 'dark' for dark mode
//     primary: {
//       main: '#1976d2', // blue
//     },
//     secondary: {
//       main: '#9c27b0', // purple
//     },
//   },
//   typography: {
//     fontFamily: 'Roboto, sans-serif',
//   },
// });

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  
    return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* resets CSS and applies theme defaults */}
      <button
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        style={{ margin: '1rem', padding: '0.5rem 1rem' }}
      >
        Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      {children}
    </ThemeProvider>
  );
}
