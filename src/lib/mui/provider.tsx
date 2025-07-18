import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Theme, ThemeProvider } from '@mui/material/styles';

export const MaterialProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Partial<Theme> | ((outerTheme: Theme) => Theme);
}) => {
  return (
    <AppRouterCacheProvider options={{ key: 'css' }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
};
