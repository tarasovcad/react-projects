import React from 'react';
import UpdateBlogForm from '../../../components/forms/UpdateBlogForm';
import { fetchSingleBlog } from '../../../../actions/actions';

const UpdateBlogPage = async ({ params }) => {
  const id = params?.id;

  // get the db info for each blog to fill the forms

  const blog = await fetchSingleBlog(id);

  return (
    <div>
      <h2 className="text-center mt-4 px-2 text-2xl py-2 fond-bold">Update Blog Page id: {id}</h2>
      <UpdateBlogForm blog={blog} />
    </div>
  );
};
export default UpdateBlogPage;
