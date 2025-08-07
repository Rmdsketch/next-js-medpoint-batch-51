'use client';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff, VpnKey } from '@mui/icons-material';
import { useState } from 'react';
import { TextFieldProps } from '@mui/material';

export default function PasswordField(props: TextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id="password"
      label="Kata Sandi"
      name="password"
      placeholder="Masukkan kata sandi"
      type={showPassword ? 'text' : 'password'}
      autoComplete="current-password"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <VpnKey sx={{ color: '#9CA3AF' }} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          height: '48px',
          '& fieldset': {
            borderColor: '#E5E7EB',
          },
          '&:hover fieldset': {
            borderColor: '#6A00FF',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#6A00FF',
          },
        },
        '& .MuiInputLabel-root': {
          color: '#374151',
          fontWeight: 500,
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: '#6A00FF',
        },
      }}
      {...props}
    />
  );
}
