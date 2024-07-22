'use client';
import { SessionProvider } from 'next-auth/react';
import { FC, ReactNode } from 'react';

interface MyProps {
  children?: ReactNode;
}

const AuthProvider: FC<MyProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
