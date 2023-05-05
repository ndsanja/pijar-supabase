'use client';

import { useSupabase } from '@/app/context/SupabaseProvider';
import { LoadingButton } from '@mui/lab';
import { Button, FormControl, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegisterForm() {
  const router = useRouter();
  const { supabase } = useSupabase();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleRegister = async (e: any) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setIsError(false);
      let { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
    } catch (error) {
      console.log(error);

      setIsLoading(false);
      setIsError(true);
    } finally {
      setIsLoading(false);
      setEmail('');
      setPassword('');
      router.push('/auth/login');
    }
  };

  return (
    <FormControl className="flex flex-col items-center justify-center space-y-4 w-full max-w-xs">
      <Typography variant="h5">Daftar</Typography>
      {isError && (
        <Typography sx={{ color: 'red' }} variant="caption">
          Something went wrong
        </Typography>
      )}
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        type="email"
        fullWidth
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        type="password"
        fullWidth
      />
      <LoadingButton
        loading={isLoading}
        onClick={handleRegister}
        variant="contained"
        sx={{ width: '100%' }}
      >
        Daftar
      </LoadingButton>
      <div className="flex items-center justify-start space-x-1">
        <Typography variant="body1">Sudah punya akun?</Typography>{' '}
        <Button onClick={(e) => router.push('/auth/login')}>Login</Button>
      </div>
    </FormControl>
  );
}
