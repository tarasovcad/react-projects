import Header from '@/app/components/Header';
import { Tag } from '@/app/utils/interface';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import React from 'react';

async function getAllTags() {
  const query = `
    *[_type == 'tag']{
        name,
        slug, 
        _id
      }`;
  const tags = client.fetch(query);
  return tags;
}

export const revalidate = 60;

export default async function page() {
  const tags: Tag[] = await getAllTags();
  return (
    <div>
      <Header title="Tags" />
      <div>
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <div className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500">
                #{tag.name}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
