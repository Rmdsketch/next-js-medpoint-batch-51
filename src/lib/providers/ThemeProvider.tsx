'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { ProviderComponent, ThemeState } from './types';

const ThemeContext = createContext<ThemeState>({
  theme: 'light',
  setTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: ProviderComponent<ThemeState> = ({ children, theme, setTheme }) => {
  useEffect(() => {
    // Check if the user's OS prefers dark mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Add listener for theme changes
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    // Clean up
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
