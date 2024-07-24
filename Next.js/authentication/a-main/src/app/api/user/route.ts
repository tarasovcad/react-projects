import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { hash } from 'bcrypt';
import { Resend } from 'resend';
import crypto from 'crypto';

const resend = new Resend(process.env.RESEND_API_KEY);

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
    // const hashedPassword = await hash(password, 10);
    // newUser - sends to the database
    // const newUser = await db.user.create({
    //   data: {
    //     username,
    //     email,
    //     password: hashedPassword,
    //   },
    // });

    await db.tempUser.create({
      data: {
        email,
        username,
        password,
      },
    });
    // Generate verification token
    const token = crypto.randomBytes(32).toString('hex');

    // Save token to database
    await db.verificationToken.create({
      data: {
        identifier: email,
        token,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
        // userData: JSON.stringify({ username, email, hashedPassword }),
      },
    });
    const verificationUrl = `${process.env.NEXTAUTH_URL}/api/auth/callback/email?token=${token}`;
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Verify your email',
      html: `<p>Click <a href="${verificationUrl}">here</a> to verify your email and sign in.</p>`,
    });

    // const { password: newUserPassword, ...rest } = newUser;
    // rest - sends to user to say that user created
    return NextResponse.json(
      {
        // user: rest,
        message: 'Verification email sent. Please check your inbox.',
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error in POST /api/user:', error);
    return NextResponse.json(
      { message: 'Something went wrong', error: error.message },
      { status: 500 },
    );
  }
}
