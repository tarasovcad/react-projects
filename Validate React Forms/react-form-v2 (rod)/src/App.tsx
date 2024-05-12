import React from 'react';
import { z } from 'zod';
import './App.css';



function App() {
  const schema = z
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
  return (
    <div className="App">
      <form>
        <label htmlFor="">First Name: </label>
        <input type="text" />
        <label htmlFor="">Last Name: </label>
        <input type="text" />
        <label htmlFor="">Email: </label>
        <input type="email" />
        <label htmlFor="">Age: </label>
        <input type="number" />
        <label htmlFor="">Password: </label>
        <input type="password" />
        <label htmlFor="">Confirm Password: </label>
        <input type="password" />

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
