import Link from 'next/link';
import React from 'react';

export default async function Page() {
  const response = await fetch('https://dummyjson.com/posts?limit=10');
  const data = await response.json();
  console.log(data);
  console.log(data.posts);
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>
      <ul>
        {data.posts.map((post) => (
          <Link href={`posts/${post.id}`}>
            <li key={post.id}>{post.title}</li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
