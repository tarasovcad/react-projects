'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/dist/server/api-utils';

export async function submitForm(formData) {
  const title = formData.get('title');
  const description = formData.get('description');
  const slug = formData.get('slug');
  const imageUrl = formData.get('imageUrl');
  console.log(title);
  if (!title || !description || !slug) {
    throw new Error('All fields are required!');
  }
  await prisma.post.create({
    data: {
      title,
      description,
      slug,
      imageUrl: imageUrl ? imageUrl : null,
    },
  });

  revalidatePath('/blogs/add-blog');
  //redirect('/blogs/add-blog');
}
