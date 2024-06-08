'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient(); //  interact with our database.

export default async function addTodo(formData: FormData) {
  const title = formData.get('title');
  try {
    await prisma.todo.create({
      data: {
        title,
      },
    });
    revalidatePath('/');
  } catch (e) {
    console.error(e);
  }
}
