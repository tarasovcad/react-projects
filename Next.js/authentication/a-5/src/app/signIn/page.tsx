// pages/signin.js
'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
export default function Signin() {
  // const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">Sign In</h1>
      <div className="flex flex-col space-y-4">
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
          Sign in with GitHub
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
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
