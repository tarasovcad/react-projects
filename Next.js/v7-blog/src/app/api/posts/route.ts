import prisma from '@/lib/db';
import { getCurrentUser } from '@/lib/session';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Get the current user
  const user = await getCurrentUser();

  try {
    // Check if the user is authenticated
    if (!user?.email) {
      // Return a 401 response if not authenticated
      return NextResponse.json({ message: 'Not Authenticated!' }, { status: 401 });
    }

    // Parse the request body as JSON
    const { title, content } = await req.json();

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        authorEmail: user.email,
      },
    });

    // Return a JSON response with the user, title, and content
    return NextResponse.json({ newPost }, { status: 200 });
  } catch (er) {
    // Return a 500 response if an error occurs
    return NextResponse.json({ message: 'something went wrong!' }, { status: 500 });
  }
}
