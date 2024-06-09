'use client';
import { signOut } from 'next-auth/react';
import React from 'react';

export default function LogoutButton() {
  return (
    <button onClick={() => signOut()} className="text-white hover:underline">
      Logout
    </button>
  );
}
