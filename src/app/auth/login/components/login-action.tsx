'use client';

import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import EmailField from './fields/email-fields';
import PasswordField from './fields/password-fields';
import LoginButton from './buttons/login-button';
import { loginAction } from '../actions';

export default function LoginAction() {
  const [error, setError] = useState<string | null>(null);
  
  const clientValidate = (formData: FormData) => {
    const email = formData.get('email') as string;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return 'Format email tidak sesuai.';
    return null;
  };

  return (
    <Box
      component="form"
      action={async (formData) => {
        const err = clientValidate(formData);
        if (err) { setError(err); return; }
        await loginAction(formData);
      }}
    >
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <EmailField />
      <PasswordField />
      <LoginButton />
    </Box>
  );
}
