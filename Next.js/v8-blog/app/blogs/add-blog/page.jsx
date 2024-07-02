import React from 'react';
import { AddBlogForm } from '../../components/forms/AddBlogForm';

export default function AddBlog() {
  return (
    <div>
      <h2 className="text-center mt-4 px-2 text-2xl py-2 fond-bold">Add Blog Page</h2>
      <AddBlogForm />
    </div>
  );
}
