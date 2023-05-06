'use client';

import { useSupabase } from '@/app/context/SupabaseProvider';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function UserPageClient() {
  const { supabase } = useSupabase();
  const router = useRouter();

  const handleLogout = async () => {
    let { error } = await supabase.auth.signOut();

    router.replace('/auth/login');
  };
  return (
    <div>
      <Button onClick={handleLogout} variant="contained">
        Keluar
      </Button>
    </div>
  );
}
