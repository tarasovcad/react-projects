'use client';

import { SessionProvider } from 'next-auth/react';
import React, { FC, ProviderProps, ReactNode } from 'react';

interface PropviderProps {
  children: ReactNode;
}

export const Provider: FC<PropviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
