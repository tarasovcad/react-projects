'use client';

import React from 'react';
import Button from './../../ui/Button';
import { addBlog } from './../../../actions/actions';
export const AddBlogForm = () => {
  const addBlogHandler = async (formData) => {
    await addBlog(formData);
  };
  return (
    <form className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md" action={addBlogHandler}>
      <h2 className="text-2xl text-green-500 font-semibold mb-6">Create a New Blog Post</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-600">
          Upload Image Link
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          className="mt-1 p-2 w-full border text-gray-600 rounded-md"
          placeholder="Enter imageUrl"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-600">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="mt-1 p-2 w-full border text-gray-600 rounded-md"
          placeholder="Enter title"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-600">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          className="mt-1 p-2 text-gray-600 w-full border rounded-md"
          placeholder="Enter description"></textarea>
      </div>

      <div className="mb-4">
        <label
          htmlFor="tags"
          className="block text-sm mt-2 p-1 font-medium text-gray-600 dark:text-gray-400">
          Job Responsibilities (UI Design, Testing, Coding) *
        </label>
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-600">
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          className="mt-1 p-2 text-gray-600 w-full border rounded-md"
          placeholder="Enter category"
        />
      </div>

      <Button label={'Add Blog'} color={'green'} />
    </form>
  );
};
