import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const { token } = req.nextauth;

    if (!token) {
      return NextResponse.redirect(new URL('/signIn', req.url));
    }

    if (pathname.startsWith('/dashboard') && token?.role !== 'Admin') {
      return NextResponse.redirect(new URL('/', req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: '/signIn',
      signOut: '/signout',
    },
  },
);

export const config = { matcher: ['/dashboard/:path*'] };
