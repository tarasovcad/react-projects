'use server';

import * as z from 'zod';

import { RegisterSchema } from '@/schemas';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  console.log(values);
  // This method attempts to validate the values object against the rules defined in LoginSchema.
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }
  return {
    success: 'Email sent!',
  };
};
