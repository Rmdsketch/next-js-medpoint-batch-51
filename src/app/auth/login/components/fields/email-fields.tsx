'use client';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Email } from '@mui/icons-material';
import { TextFieldProps } from '@mui/material';

export default function EmailField(props: TextFieldProps) {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email"
      name="email"
      placeholder="Masukkan email"
      autoComplete="email"
      autoFocus
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Email sx={{ color: '#9CA3AF' }} />
          </InputAdornment>
        ),
      }}
      {...props}
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
    />
  );
}
