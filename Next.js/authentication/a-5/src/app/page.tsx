import AuthProvider from '@/components/AuthProvider';
import { Navbar } from '@/components/Navbar';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';
import { authOptions } from './api/auth/[...nextauth]/options';

const App = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <Link href="/dashboard" className="text-blue-500 hover:underline">
        Go to Dashboard (Admin Only)
      </Link>
      <pre> {JSON.stringify(session)}</pre>
    </div>
  );
};

export default App;
