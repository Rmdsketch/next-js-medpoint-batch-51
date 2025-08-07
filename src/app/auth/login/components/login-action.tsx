'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Box, Typography } from '@mui/material';

import EmailField from './fields/email-fields';
import PasswordField from './fields/password-fields';
import LoginButton from './buttons/login-button';

export default function LoginAction() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateEmailFormat = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!validateEmailFormat(email)) {
      setError('Format email tidak sesuai.');
      setLoading(false);
      return;
    }
    
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError('Email atau password salah.');
      setLoading(false);
      return;
    }
    router.push('/dashboard');
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      <EmailField />
      <PasswordField />
      <LoginButton disabled={loading} />
    </Box>
  );
}
