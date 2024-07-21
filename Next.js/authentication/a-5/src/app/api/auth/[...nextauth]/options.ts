import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = { id: '1', name: 'User', email: 'user@example.com' };
        if (credentials!.username === 'User' && credentials!.password === 'password') {
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.role = user.email === 'tarasovcad@gmail.com' ? 'Admin' : 'User';
        token.provider = account.provider || 'credentials';
      }
      return token;
    },

    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.name =
          token.provider === 'github'
            ? 'Github User'
            : token.provider === 'google'
            ? 'Google User'
            : 'Credentials User';
      }
      return session;
    },
    pages: {
      signIn: '/signin',
      signOut: '/signout',
    },
  },
};
