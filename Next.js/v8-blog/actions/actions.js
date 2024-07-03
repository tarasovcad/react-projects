'use server';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const prisma = new PrismaClient();

export const fetchBlogs = async () => {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return blogs;
};

export const fetchSingleBlog = async (id) => {
  const blogs = await prisma.blog.findFirst({
    where: {
      id: id,
    },
  });
  return blogs
};

export const addBlog = async (formData) => {
  // collect info from form using formData
  const imageUrl = formData.get('imageUrl');
  const title = formData.get('title');
  const category = formData.get('category');
  const description = formData.get('description');

  // push the data into the DB
  const newBlog = await prisma.blog.create({
    data: {
      imageUrl: imageUrl ? imageUrl : null,
      title,
      category,
      description,
    },
  });
  revalidatePath('/blogs/add-blog');
  redirect('/blogs');
};
