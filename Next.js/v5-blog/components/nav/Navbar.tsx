import Link from 'next/link';
import React from 'react';
import HoverUnderLine from './HoverUnderLine';
import { Button } from '../ui/button';
import { SiGithub } from 'react-icons/si';
import LoginForm from './LoginForm';

export default function Navbar() {
  return (
    <nav className="justify-between items-center flex ">
      <div className="group">
        <Link href={'/'} className="font-bold text-2xl">
          DailyMedia
        </Link>
        <div className="h-1 w-0 group-hover:w-full  transition-all"></div>
      </div>
      <LoginForm />
    </nav>
  );
}
