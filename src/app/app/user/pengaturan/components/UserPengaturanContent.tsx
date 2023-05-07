'use client';

import { useSupabase } from '@/app/context/SupabaseProvider';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function UserPengaturanContent() {
  const { supabase } = useSupabase();
  const router = useRouter();

  const handleLogout = async () => {
    let { error } = await supabase.auth.signOut();

    router.replace('/auth/login');
  };
  return (
    <>
      <Button onClick={handleLogout}>Keluar</Button>
    </>
  );
}
