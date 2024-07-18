import AuthProvider from '@/components/AuthProvider';
import { Navbar } from '@/components/Navbar';
import React from 'react';

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    </div>
  );
};

export default App;
