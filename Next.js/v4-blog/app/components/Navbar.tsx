import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="mx-auto max-w-5xl px-6">
        <div className="flex justify-between items-center h-16 w-full">
          <Link href="/">
            <div>Dev Blook</div>
          </Link>
          <div>theme</div>
        </div>
      </nav>
    </div>
  );
}
