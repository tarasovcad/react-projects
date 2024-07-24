// verification.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { hash } from 'bcrypt';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json({ message: 'Invalid or missing token' }, { status: 400 });
    }

    const tokenRecord = await db.verificationToken.findUnique({
      where: { token },
    });

    if (!tokenRecord || tokenRecord.expires < new Date()) {
      return NextResponse.json({ message: 'Token expired or invalid' }, { status: 400 });
    }

    const { identifier: email } = tokenRecord;

    // Retrieve user data from TempUsercure location
    const tempUserData = await db.tempUser.findUnique({
      where: { email },
    });

    if (!tempUserData) {
      return NextResponse.json({ message: 'User data not found' }, { status: 400 });
    }

    const hashedPassword = await hash(tempUserData.password, 10);

    // Create new user
    const newUser = await db.user.create({
      data: {
        username: tempUserData.username,
        email: tempUserData.email,
        password: hashedPassword,
      },
    });

    // Clean up temporary data and token
    await db.tempUser.delete({ where: { email } });
    await db.verificationToken.delete({ where: { token } });

    return NextResponse.json(
      { message: 'User verified and created successfully', user: newUser },
      { status: 201 },
    );
  } catch (error) {
    console.error('Error in GET /api/auth/callback/email:', error);
    return NextResponse.json(
      { message: 'Something went wrong', error: error.message },
      { status: 500 },
    );
  }
}
