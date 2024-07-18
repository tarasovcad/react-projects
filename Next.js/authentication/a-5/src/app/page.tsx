import AuthProvider from '@/components/AuthProvider';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import React from 'react';

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <Link href="/dashboard" className="text-blue-500 hover:underline">
        Go to Dashboard (Admin Only)
      </Link>
    </div>
  );
};

export default App;
