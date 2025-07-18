'use server';

import { cookies } from 'next/headers';

const COOKIE_NAME = 'NEXT_THEME';

export async function toggleTheme() {
  const cookieStore = await cookies();

  const theme = cookieStore.get(COOKIE_NAME)?.value || 'light';

  if (theme === 'light') {
    cookieStore.set(COOKIE_NAME, 'dark');
  } else {
    cookieStore.set(COOKIE_NAME, 'light');
  }
}

export async function setTheme(theme: 'light' | 'dark') {
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, theme);
}

export async function getTheme(): Promise<'light' | 'dark'> {
  const cookieStore = await cookies();

  return (cookieStore.get(COOKIE_NAME)?.value ?? 'light') as 'light' | 'dark';
}
