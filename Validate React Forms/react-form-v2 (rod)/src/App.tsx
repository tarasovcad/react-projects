import React from 'react';
import { ZodType, z } from 'zod';
import { useForm } from 'react-hook-form';
import './App.css';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
};
function App() {
  const schema: ZodType<FormData> = z
    .object({
      firstName: z.string().min(2).max(20),
      lastName: z.string().min(2).max(20),
      email: z.string().email(),
      age: z.number().min(18).max(110),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const submitData = (data: FormData) => {
    console.log('it worked', data);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(submitData)}>
        <label htmlFor="">First Name: </label>
        <input type="text" {...register('firstName')} />
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <label htmlFor="">Last Name: </label>
        <input type="text" {...register('lastName')} />
        {errors.lastName && <span>{errors.lastName.message}</span>}
        <label htmlFor="">Email: </label>
        <input type="email" {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
        <label htmlFor="">Age: </label>
        <input type="number" {...register('age', { valueAsNumber: true })} />
        {errors.age && <span>{errors.age.message}</span>}
        <label htmlFor="">Password: </label>
        <input type="password" {...register('password')} />
        {errors.password && <span>{errors.password.message}</span>}
        <label htmlFor="">Confirm Password: </label>
        <input type="password" {...register('confirmPassword')} />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
