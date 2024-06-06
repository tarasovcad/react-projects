'use server';

import * as z from 'zod';
import bcrypt from 'bcryptjs';
import { RegisterSchema } from '@/schemas';

import { db } from '@/lib/db';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // This method attempts to validate the values object against the rules defined in LoginSchema.
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { password, name, email } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: 'Email already in use!' };
  }
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //TODO: send verification token email

  return { success: 'User created!' };

  return {
    success: 'Email sent!',
  };
};
