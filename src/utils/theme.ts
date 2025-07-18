'use client';

import { createTheme } from '@mui/material/styles';
import { lightBlue, teal, deepOrange } from '@mui/material/colors';

const typography = {
  fontFamily: 'var(--font-nunito)',
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: teal[500],
      '100': teal[100],
      '200': teal[200],
      '300': teal[300],
      '400': teal[400],
      '500': teal[500],
      '600': teal[600],
      '700': teal[700],
      '800': teal[800],
      '900': teal[900],
    },
    secondary: {
      main: lightBlue[500],
      '100': lightBlue[100],
      '200': lightBlue[200],
      '300': lightBlue[300],
      '400': lightBlue[400],
      '500': lightBlue[500],
      '600': lightBlue[600],
      '700': lightBlue[700],
      '800': lightBlue[800],
      '900': lightBlue[900],
    },
  },
  typography,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: deepOrange[500],
      '100': deepOrange[100],
      '200': deepOrange[200],
      '300': deepOrange[300],
      '400': deepOrange[400],
      '500': deepOrange[500],
      '600': deepOrange[600],
      '700': deepOrange[700],
      '800': deepOrange[800],
      '900': deepOrange[900],
    },
    secondary: {
      main: teal[500],
      '100': teal[100],
      '200': teal[200],
      '300': teal[300],
      '400': teal[400],
      '500': teal[500],
      '600': teal[600],
      '700': teal[700],
      '800': teal[800],
      '900': teal[900],
    },
  },
  typography,
});
