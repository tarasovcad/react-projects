import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch('https://dummyjson.com/posts');
  const result = await response.json();
  return NextResponse.json(result);
}
