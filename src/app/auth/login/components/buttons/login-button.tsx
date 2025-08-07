'use client';

import Button from '@mui/material/Button';
import { ArrowForward } from '@mui/icons-material';
import { ButtonProps } from '@mui/material';

export default function LoginButton(props: ButtonProps) {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      endIcon={<ArrowForward />}
      sx={{
        mt: 3,
        py: 1.5,
        height: '48px',
        background: 'linear-gradient(135deg, #6A00FF 0%, #8B5CF6 100%)',
        borderRadius: '8px',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: '14px',
        letterSpacing: '0.5px',
        boxShadow: '0 4px 14px 0 rgba(106, 0, 255, 0.3)',
        '&:hover': {
          background: 'linear-gradient(135deg, #5800CC 0%, #7C3AED 100%)',
          boxShadow: '0 6px 20px 0 rgba(106, 0, 255, 0.4)',
        },
      }}
      {...props}
    >
      Masuk Sekarang
    </Button>
  );
}
