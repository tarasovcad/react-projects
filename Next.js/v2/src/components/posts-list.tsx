import Link from 'next/link';
import React from 'react';

export default async function PostsList() {
  const response = await fetch('https://dummyjson.com/posts?limit=10');
  const data = await response.json();
  return (
    <ul>
      {data.posts.map((post) => (
        <Link href={`posts/${post.id}`}>
          <li key={post.id}>{post.title}</li>
        </Link>
      ))}
    </ul>
  );
}
