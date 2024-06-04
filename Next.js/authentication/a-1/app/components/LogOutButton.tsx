'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import React from 'react';

export default function LogOutButton() {
  return (
    <Button onClick={() => signOut({ callbackUrl: `${window.location.origin}/auth` })}>
      Log Out
    </Button>
  );
}
