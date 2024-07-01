'use server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function addGrudge(formData) {
  const name = formData.get('grudgeName');
  try {
    if (!name) throw new Error('Grudge needs a name!');
    await sql`INSERT INTO Grudges (Name) VALUES (${name})`;
    revalidatePath('')
  } catch (err) {
    console.error(err);
    return { status: 500 };
  }
  return { status: 200 };
  console.log(name);
}
