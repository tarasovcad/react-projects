import Link from 'next/link';
import React from 'react';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-x-2xl mx-auto px-4 py-5">
      <Link href="/" className="font-bold font-3xl">
        Maksym<span className="text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </nav>
  );
}
 