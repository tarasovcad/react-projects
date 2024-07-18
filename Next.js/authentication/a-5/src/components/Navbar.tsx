import Link from 'next/link';
import React from 'react';
import { authOptions } from '../app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
export const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/" className="font-semibold text-xl tracking-tight">
          My App
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </Link>
        </div>
        <div className="flex">
          <span className="mr-4">{session?.user?.email}</span>
          <span className="mr-4">{session?.user?.role}</span>
          {session && (
            <Image src={session?.user?.image} width={20} height={20} alt="logo" className="mr-2" />
          )}

          {session ? (
            <Link
              href="/signOut"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
              Sign Out
            </Link>
          ) : (
            <Link
              href="/signIn"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
