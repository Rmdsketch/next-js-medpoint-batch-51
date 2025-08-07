'use client';

import { Box } from '@mui/material';

interface RefactoryLogo {
  variant?: 'light' | 'dark';
  height?: number;
}

export default function RefactoryLogo({ variant = 'dark', height = 50 }: RefactoryLogo) {
  return (
    <Box
      component="img"
      src="/logo-refactory.png"
      alt="Refactory Logo"
      sx={{
        height,
        filter: variant === 'light' ? 'invert(1)' : 'none',
      }}
    />
  );
}
