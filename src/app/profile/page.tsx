import { APP_LOGIN } from '@/constants';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Input } from '@/components';

export default async function ProfilePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect(APP_LOGIN);
  }

  const user = data.user;

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Avatar sx={{ width: 64, height: 64 }} />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Input disabled label="Email" variant="standard" value={user.email} />
          <Input
            disabled
            label="Join Date"
            variant="standard"
            value={new Date(user.email_confirmed_at ?? '').toLocaleDateString(
              'en-GB',
              {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }
            )}
          />
        </Box>
      </Box>
    </Container>
  );
}
