'use client';

import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Typography variant="h1">Pijar</Typography>
      <Typography variant="h2">Sekolah Terbuka</Typography>
      <div className="h-[80px]"></div>
      <Button variant="contained" onClick={() => router.push('/app')}>
        App
      </Button>
    </main>
  );
}
