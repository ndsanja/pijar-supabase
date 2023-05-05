'use client';

import { useSupabase } from '@/app/context/SupabaseProvider';
import { LoadingButton } from '@mui/lab';
import { Button, FormControl, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const { supabase } = useSupabase();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
    } catch (error) {
      setIsLoading(false);
    } finally {
      router.replace('/app');
      setIsLoading(false);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <FormControl className="flex flex-col items-center justify-center space-y-4 w-full max-w-xs">
      <Typography variant="h5">Login</Typography>
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
        onClick={handleLogin}
        variant="contained"
        sx={{ width: '100%' }}
      >
        Masuk
      </LoadingButton>
      <div className="flex items-center justify-start space-x-1">
        <Typography variant="body1">Belum punya akun?</Typography>{' '}
        <Button onClick={() => router.push('/auth/register')}>Daftar</Button>
      </div>
    </FormControl>
  );
}
