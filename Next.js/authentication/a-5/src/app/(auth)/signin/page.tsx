// pages/signin.js
'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
export default function SignUp() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-2">Sign In</h1>
      <p className="text-xl mb-6">
        {`Don't have an account? ${''}`}
        <Link className="text-blue-500 underline" href={'/signup'}>
          Sign up.
        </Link>
      </p>
      <form>
        <div className="grid w-full items-center gap-1.5 min-w-[400px]">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />

          <div className="flex align-middle justify-between mt-2">
            <Label htmlFor="password">Password</Label>
            <Link className="text-blue-500 underline text-sm" href={'/'}>
              Forgot Password?
            </Link>
          </div>
          <Input type="password" id="password" placeholder="•••••" />
        </div>
        <Button variant="default">Continue</Button>
      </form>
      <div className="flex flex-col space-y-4 mt-4">
        <button
          onClick={() => signIn('github', { callbackUrl })}
          className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
          <Image
            className="w-6 h-6"
            src="https://authjs.dev/img/providers/github.svg"
            alt="GitHub logo"
            width={24}
            height={24}
          />
          Login with GitHub
        </button>
        <button
          onClick={() => signIn('google', { callbackUrl })}
          className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
          <Image
            className="w-6 h-6"
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google logo"
            width={24}
            height={24}
          />
          Login with Google
        </button>
      </div>
    </div>
  );
}
