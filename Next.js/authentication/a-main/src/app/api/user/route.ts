import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { hash } from 'bcrypt';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = body;

    //check if email already exists
    const existingUserEmail = await db.user.findUnique({
      where: { email },
    });
    if (existingUserEmail) {
      // cannot create the user accound with same email
      return NextResponse.json(
        { user: null, message: 'User with this email already exists' },
        {
          status: 409,
        },
      );
    }
    //check if username already exists
    const existingUsername = await db.user.findUnique({
      where: { username },
    });
    if (existingUsername) {
      // cannot create the user accound with same email
      return NextResponse.json(
        { user: null, message: 'User with this username already exists' },
        {
          status: 409,
        },
      );
    }
    const hashedPassword = await hash(password, 10);
    // newUser - sends to the database
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    const { password: newUserPassword, ...rest } = newUser;
    // rest - sends to user to say that user created
    return NextResponse.json(
      {
        user: rest,
        message: 'User created successfully',
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('Error in POST /api/user:', error);
    return NextResponse.json(
      { message: 'Something went wrong', error: error.message },
      { status: 500 },
    );
  }
}
