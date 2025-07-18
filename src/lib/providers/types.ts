export type ProviderComponent<T = void> = React.FC<T & { children: React.ReactNode }>;

export type ThemeState = { theme: 'light' | 'dark', setTheme: (theme: 'light' | 'dark') => void };
