'use client';
import React from 'react';
import { signOut } from 'next-auth/react';

import { useRouter } from 'next/navigation';
const SignOut = () => {
  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };
  return (
    <div className="flex gap-4">
      <h1>Are you sure you want to sign out?</h1>
      <button onClick={handleSignOut}>Yes, Sign Out</button>
      <button>Cancel</button>
    </div>
  );
};

export default SignOut;
