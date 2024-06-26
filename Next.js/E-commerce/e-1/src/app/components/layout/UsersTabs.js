'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function UserTabs({ isAdmin }) {
  const path = usePathname();
  console.log(path);
  return (
    <div className="flex mx-auto gap-2 tabs justify-center flex-wrap mb-6">
      <Link className={path === '/profile' ? 'active' : ''} href={'/profile'}>
        Profile
      </Link>
      {isAdmin && (
        <>
          <Link href={'/categories'} className={path === '/categories' ? 'active' : ''}>
            Categories
          </Link>
          <Link href={'/menu-items'} className={path === 'menu-items' ? 'active' : ''}>
            Menu Items
          </Link>
          <Link className={path === '/users' ? 'active' : ''} href={'/users'}>
            Users
          </Link>
        </>
      )}
      {/* <Link className={path === '/orders' ? 'active' : ''} href={'/orders'}>
        Orders
      </Link> */}
    </div>
  );
}
