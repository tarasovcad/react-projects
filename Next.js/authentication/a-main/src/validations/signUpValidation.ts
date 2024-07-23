import { z } from 'zod';

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(1, 'Username is required')
      .min(4, 'Username must be at least 3 characters')
      .regex(/^[a-zA-Z0-9_]+$/, 'Username must contain only English letters')
      .max(20, 'Username is too long'),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/\d/, 'Password must contain at least one number')
      .regex(/^[a-zA-Z0-9_]+$/, 'Username must contain only English letters')
      .max(50, 'Password is too long'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
