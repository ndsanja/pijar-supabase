'use client';

import { useSupabase } from '@/app/context/SupabaseProvider';
import { LoadingButton } from '@mui/lab';
import { Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type FormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();
  const { supabase } = useSupabase();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: 'usertest@mail.com',
      password: '123456',
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (form: FormValues) => {
    let stateData: any = null;
    let stateError: any = null;
    try {
      setIsLoading(true);
      setIsError(false);
      let { data, error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });

      stateData = data;
      stateError = error;
    } catch (error: any) {
      setIsLoading(false);
      setIsError(true);
    } finally {
      if (stateError !== null) {
        setError(stateError.message);
      }
      setIsLoading(false);
      router.push('/app');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col items-center justify-center space-y-4 w-full max-w-xs"
    >
      <Typography variant="h5">Login</Typography>
      {error && (
        <Typography sx={{ color: 'red' }} variant="caption">
          {error}
        </Typography>
      )}
      <TextField
        fullWidth
        label="Email"
        type="email"
        {...register('email', {
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'Invalid email format',
          },
          required: { value: true, message: 'Email is required' },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Password"
        type="password"
        {...register('password', {
          required: { value: true, message: 'Email is required' },
          minLength: {
            value: 6,
            message: 'Password min 6 karakter',
          },
        })}
        error={!!errors.password}
        helperText={errors.password?.message}
        fullWidth
      />
      <LoadingButton
        type="submit"
        loading={isLoading}
        variant="contained"
        sx={{ width: '100%' }}
      >
        Masuk
      </LoadingButton>
      <div className="flex items-center justify-start space-x-1">
        <Typography variant="body1">Belum punya akun?</Typography>{' '}
        <Button onClick={(e) => router.push('/auth/register')}>Daftar</Button>
      </div>
    </form>
  );
}
