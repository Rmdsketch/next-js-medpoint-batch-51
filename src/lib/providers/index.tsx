'use client';

import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { ProviderComponent, ThemeState } from './types';

const composeProviders = (
  providers: ProviderComponent[],
  children: React.ReactNode
) => {
  return providers.reduceRight((acc, Provider) => {
    return React.createElement(Provider, null, acc);
  }, children);
};

type ProvidersProps = ThemeState & {
  children: React.ReactNode;
  providers?: ProviderComponent[];
  CustomThemeProvider?: ProviderComponent<ThemeState>;
}

export const Providers = ({
  children,
  providers = [],
  theme,
  setTheme,
  CustomThemeProvider,
}: ProvidersProps) => {
  if (CustomThemeProvider) {
    return (
      <CustomThemeProvider theme={theme} setTheme={setTheme}>
        {composeProviders([...providers], children)}
      </CustomThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme} setTheme={setTheme}>
      {composeProviders([...providers], children)}
    </ThemeProvider>
  );
};
