import { cookies } from 'next/dist/client/components/headers';
import { redirect } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  let authCookies = cookies().get('supabase-auth-token');
  if (authCookies == undefined) {
    redirect('/auth/login');
  }

  return (
    <>
      <div>App Layout</div>
      {children}
    </>
  );
}
