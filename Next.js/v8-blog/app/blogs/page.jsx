import React from 'react';
import prismadb from './../libs/prismadb';
import { PrismaClient } from '@prisma/client';
import { fetchBlogs } from '../../actions/actions';
import BlogItem from './../components/BlogItem';
export default async function Blogs() {
  // fetch data
  const blogs = await fetchBlogs();

  return (
    <div>
      <h2 className="text-center mt-4 px-2 text-2xl py-2 fond-bold">All Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid=cols-3 gap-4 mt-5 mb-5 px-4 py-5">
        {blogs?.length > 0 ? (
          blogs?.map((blog) => {
            return <BlogItem key={blog?.id} blog={blog} />;
          })
        ) : (
          <h2>no blogs avaliable</h2>
        )}
      </div>
    </div>
  );
}
