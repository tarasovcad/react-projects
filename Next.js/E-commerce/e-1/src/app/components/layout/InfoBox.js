import React from 'react';

export default function InfoBox({ children }) {
  return (
    <div>
      <div className="text-center bg-blue-100 p-4 rounded-lg border border-blue-200">
        {children}
      </div>
    </div>
  );
}
