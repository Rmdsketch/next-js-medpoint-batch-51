import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { loginAction } from './actions';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { APP_DASHBOARD } from '@/constants';
import { Input } from '@/components';

export default async function LoginPage() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    redirect(APP_DASHBOARD);
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" action={loginAction} sx={{ mt: 1 }}>
          <Input
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Input
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
