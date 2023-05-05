'use client';

import { Button } from '@mui/material';
import { useSupabase } from '@/app/context/SupabaseProvider';
import { useRouter } from 'next/navigation';

export default function AppPage() {
  const router = useRouter();
  const { supabase } = useSupabase();

  const handleLogout = async () => {
    let { error } = await supabase.auth.signOut();

    router.replace('/auth/login');
  };
  return (
    <>
      <Button onClick={handleLogout}>Logout</Button>
      <div>AppPage</div>
    </>
  );
}
