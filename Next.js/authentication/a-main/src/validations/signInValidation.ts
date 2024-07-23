import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters'),
  // .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  // .regex(/\d/, 'Password must contain at least one number')
  // .regex(/^[a-zA-Z0-9_]+$/, 'Username must contain only English letters')
  // .max(50, 'Password is too long'),
});

export type SignInFormData = z.infer<typeof signInSchema>;
