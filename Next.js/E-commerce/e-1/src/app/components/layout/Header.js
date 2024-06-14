'use client';
import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
export default function Header() {
  const session = useSession();
  console.log(session);
  const status = session.status;
  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-4 text-gray-500 font-semibold items-center">
        <Link href="/" className="text-primary font-semibold text-2xl">
          ST Pizza
        </Link>
        <Link href="/">Home</Link>
        <Link href="/">Menu</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </nav>

      <nav className="flex gap-4 text-gray-500 font-semibold items-center">
        {status === 'authenticated' && (
          <button
            className="bg-primary rounded-full text-white px-8 py-2"
            onClick={() => signOut()}>
            Logout
          </button>
        )}
        {status === 'unauthenticated' && (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register" className="bg-primary rounded-full text-white px-8 py-2">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
