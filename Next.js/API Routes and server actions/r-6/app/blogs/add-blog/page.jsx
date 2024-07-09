import { submitForm } from '@/actions/submitForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

export default function AddBlog() {
  return (
    <>
      <form action={submitForm} className="max-w-[600px] m-auto flex flex-col gap-3">
        <h1 className="mt-3 font-bold text-2xl">Add blog!</h1>
        <Input label="Title" name="title" placeholder="Title" />
        <Input label="Description" name="description" placeholder="Description" />
        <Input label="Slug" name="slug" placeholder="Slug" />
        <Input label="ImageUrl" name="imageUrl" placeholder="ImageUrl" />

        <Button>Add blog</Button>
      </form>
    </>
  );
}

import mongoose from 'mongoose';
import { User } from '../../models/User';

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
