'use client';

import Button from '@mui/material/Button';
import { Logout } from '@mui/icons-material';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  redirectTo?: string;
};

export default function LogoutButton({ redirectTo = '/auth/login' }: Props) {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await supabase.auth.signOut();
      router.refresh();          
      router.push(redirectTo);  
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="outlined"
      color="error"
      startIcon={<Logout />}
      onClick={handleLogout}
      disabled={loading}
      sx={{
        textTransform: 'uppercase',
        fontWeight: 600,
        letterSpacing: '0.5px',
        borderRadius: '8px',
        height: '40px',
      }}
    >
      {loading ? 'Keluar...' : 'Logout'}
    </Button>
  );
}
