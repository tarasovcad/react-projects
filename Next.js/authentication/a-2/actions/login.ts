'use server';

import * as z from 'zod';

import { LoginSchema } from '@/schemas';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  console.log(values);
  // This method attempts to validate the values object against the rules defined in LoginSchema.
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }
  return {
    success: 'Email sent!',
  };
};
