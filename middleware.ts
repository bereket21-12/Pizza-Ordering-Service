import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defineDynamicAbilitiesFor } from '@/lib/ability';
import { getToken } from 'next-auth/jwt';


const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;


  const token = await getToken({ req: request, secret });
  const userSession = token ? { user: token } : null;


  console.log('User Session:', userSession);
  console.log('Current Path:', path);


  if (!userSession && path.startsWith('/admin')) {
    return redirectTo('/login', request);
  }

  const ability = await defineDynamicAbilitiesFor(userSession);
  console.log('User abilities:', ability.rules);

  // Authorization checks for admin and customer routes
  if (isUnauthorizedAccess(path, ability)) {
    return redirectTo('/', request);
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Helper function to redirect users
function redirectTo(destination: string, request: NextRequest) {
  return NextResponse.redirect(new URL(destination, request.url));
}

// Check if the user is unauthorized for the given path
function isUnauthorizedAccess(path: string, ability: any) {
  if (path.startsWith('/admin/role') && ability.cannot('manage', 'all')) return true;

  if (path.startsWith('/admin/role') && ability.cannot('manage', 'all')) return true;
  if (path.startsWith('/customer/order_history') && ability.cannot('read', 'order')) return true;
  return false;
}

// Define which paths should use this middleware
export const config = {
  matcher: ['/admin/:path*', '/customer/:path*'],
};
