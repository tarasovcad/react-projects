import Link from 'next/link';
import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Blog POSt 1',
    content: 'this si',
    username: 'dsojdf',
  },
  {
    id: 2,
    title: 'Blog POS123t 1',
    content: 'th123is si',
    username: 'dso123jdf',
  },
];

export default function BlogsPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link href={`/blogs/${post.id}`} className="bg-white p-4 rounder-md shadow-md">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>Written by: {post.username}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
