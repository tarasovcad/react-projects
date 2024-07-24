import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from './db';
import { compare } from 'bcrypt';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';
import EmailProvider from 'next-auth/providers/email';

const prisma = new PrismaClient();

const resend = new Resend(process.env.RESEND_API_KEY);

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({ identifier: email, url }) => {
        try {
          const result = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Sign in to Your App',
            html: `<p>Click <a href="${url}">here</a> to sign in.</p>`,
          });
          if (result.error) {
            throw new Error('Failed to send verification email');
          }
        } catch (error) {
          console.error('Error sending verification email:', error);
          throw new Error('Failed to send verification email');
        }
      },
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'johndoe@mail.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // credentials - input values from SignIn component
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        // take user from database
        const existingUser = await db.user.findUnique({
          where: { email: credentials?.email },
        });
        if (!existingUser) {
          return null;
        }
        const passwordMatch = await compare(credentials.password, existingUser.password);
        if (!passwordMatch) {
          return null;
        }
        return {
          id: existingUser.id as string,
          username: existingUser.username,
          email: existingUser.email,
        };
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!user.username) {
        switch (account?.provider) {
          case 'google':
            user.username = profile.email.split('@')[0];
            break;
          case 'github':
            user.username = profile.login;
            break;
        }
      }

      return true;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.role = user.email === 'tarasovcad@gmail.com' ? 'Admin' : 'User';
        token.provider = account?.provider || 'credentials';
        token.username = user.username;
      }
      return token;
    },

    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.username = token.username;
        session.user.provider = token.provider;
      }
      return session;
    },
  },
  pages: {
    signIn: '/signin',
    verifyRequest: '/verify-request',
  },
  debug: true,
};
