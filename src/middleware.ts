import { Database } from '@/schema';
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  let authWithCookies = req.cookies.has('supabase-auth-token');

  if (req.nextUrl.pathname.startsWith('/app')) {
    if (!authWithCookies) {
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }
    return res;
  }
  if (req.nextUrl.pathname.startsWith('/auth')) {
    if (authWithCookies) {
      return NextResponse.redirect(new URL('/app', req.url));
    }
    return res;
  }

  const supabase = createMiddlewareSupabaseClient<Database>({ req, res });
  await supabase.auth.getSession();
  return res;
}
