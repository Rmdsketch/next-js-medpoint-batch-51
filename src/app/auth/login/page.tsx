import { Box, Typography, Container, Grid, Paper, Link } from '@mui/material';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import LoginAction from './components/login-action';
import RefactoryLogo from './components/logo/logo'; 

export default async function LoginPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  // console.log('Server-side getUser data:', data);
  if (data?.user) {
    redirect('/dashboard');
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#F3F4F6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={24}
          sx={{
            borderRadius: { xs: 2, md: 3 },
            overflow: 'hidden',
            maxWidth: { xs: '100%', sm: '900px', md: '1000px', lg: '1200px' },
            mx: 'auto',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        >
          <Grid container sx={{ minHeight: { xs: 'auto', md: '600px', lg: '700px' } }}>
            {/* Left Side - Form */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                p: { xs: 3, sm: 4, md: 6 },
              }}
            >
              <Box sx={{ width: '100%', maxWidth: 400 }}>
                {/* Logo */}
                <Box sx={{ mb: { xs: 4, md: 6 } }}>
                  <RefactoryLogo variant="dark" />
                </Box>

                {/* Section */}
                <Box sx={{ mb: { xs: 3, md: 4 } }}>
                  <Typography
                    component="h1"
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: '#1F2937',
                      mb: 1.5,
                      fontSize: { xs: '24px', sm: '28px', md: '32px' },
                    }}
                  >
                    Selamat Datang
                  </Typography>
                  <Typography
                    sx={{
                      color: '#6B7280',
                      fontSize: { xs: '13px', md: '15px' },
                      lineHeight: 1.6,
                    }}
                  >
                    Masuk dan kelola dashboard Mediverse Anda sekarang
                  </Typography>
                </Box>

                {/* Login Form Action */}
                <Box>
                  <LoginAction />
                  <Box sx={{ textAlign: 'right', mt: 1, mb: 2 }}>
                    <Link
                      href="#"
                      variant="body2"
                      sx={{
                        color: '#6B7280',
                        textDecoration: 'none',
                        fontSize: { xs: '13px', md: '14px' },
                        fontWeight: 500,
                        '&:hover': {
                          color: '#6A00FF',
                          textDecoration: 'none',
                        },
                      }}
                    >
                      Lupa Kata Sandi?
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Hero Section */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                background: 'linear-gradient(135deg, #6A00FF 0%, #8B5CF6 50%, #A855F7 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                p: { xs: 4, sm: 5, md: 6 },
                position: 'relative',
                overflow: 'hidden',
                minHeight: { xs: '400px', sm: '500px', md: 'auto' },
              }}
            >
              {/* Logo */}
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 20, md: 32 },
                  right: { xs: 'auto', md: 32 },
                  left: { xs: 20, md: 'auto' },
                  display: { xs: 'block', md: 'block' },
                }}
              >
                {/* <RefactoryLogo variant="light"></RefactoryLogo> */}
              </Box>

              {/* Image */}
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: { xs: 3, md: 4 },
                  mt: { xs: 4, md: 0 },
                }}
              >
                <img
                  src="/doctors.png"
                  alt="Healthcare Assistant"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              {/* Bottom Text */}
              <Box sx={{ textAlign: 'center', maxWidth: { xs: 280, sm: 320, md: 360 } }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '18px', sm: '22px', md: '28px', lg: '32px' },
                    lineHeight: 1.2,
                    mb: { xs: 0.5, md: 1 },
                  }}
                >
                  Your Personal
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '18px', sm: '22px', md: '28px', lg: '32px' },
                    lineHeight: 1.2,
                  }}
                >
                  Healthcare Assistant
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
