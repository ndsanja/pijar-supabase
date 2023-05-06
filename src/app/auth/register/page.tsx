import { cookies } from 'next/dist/client/components/headers';
import RegisterForm from './components/Form';
import { redirect } from 'next/navigation';

export default function RegisterPage() {
  // let authCookies = cookies().get('supabase-auth-token');
  // if (authCookies) {
  //   redirect('/app');
  // }
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <RegisterForm />
    </div>
  );
}
