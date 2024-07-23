import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

import { DropdownMenuComponent } from './DropdownMenu';
import { type IconProps } from '@/types/types';
import { authOptions } from '@/lib/auth';

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  const { name, email, image, role } = session?.user || {};
  console.log(session);
  return (
    <header className="w-full bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-medium">Acme Inc</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:underline transition-all"
            prefetch={false}>
            Home
          </Link>
          <Link href="#" prefetch={false}>
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium hover:underline transition-all"
            prefetch={false}>
            Services
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium hover:underline transition-all"
            prefetch={false}>
            Dashboard
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            {session && <h2 className="text-base">{email}</h2>}
            <DropdownMenuTrigger asChild>
              <Avatar className="h-9 w-9 cursor-pointer">
                {session && <AvatarImage src={image} />}
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuComponent />
          </DropdownMenu>
          {!session && (
            <Link href={'/signin'}>
              <Button variant="outline">Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

function MountainIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
