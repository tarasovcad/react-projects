'use server';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function addTodoAction(formData) {
  const title = formData.get('title');
  const description = formData.get('description');

  const info = await prisma.todo.create({
    data: {
      title,
      description,
    },
  });

  revalidatePath('/');
}
