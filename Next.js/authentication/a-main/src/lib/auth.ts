import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from './db';
import { compare } from 'bcrypt';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
  providers: [
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
    async jwt({ token, user, account }) {
      if (user) {
        token.role = user.email === 'tarasovcad@gmail.com' ? 'Admin' : 'User';
        token.provider = account?.provider || 'credentials';
      }
      return token;
    },
    async session({ session, token }) {
      // console.log(session, token);
      // if (session?.user) {
      //   session.user.role = token.role;
      //   session.user.name =
      //     token.provider === 'github'
      //       ? 'Github User'
      //       : token.provider === 'google'
      //       ? 'Google User'
      //       : 'Credentials User';
      // }
      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
};

// token {
//   name: 'tarasovcad',
//   email: 'tarasovcad@gmail.com',
//   picture: 'https://avatars.githubusercontent.com/u/157248212?v=4',
//   sub: '669efc918ca8a9ca3eb913c4'
// }

// user {
//   id: '669efc918ca8a9ca3eb913c4',
//   name: 'tarasovcad',
//   username: null,
//   email: 'tarasovcad@gmail.com',
//   emailVerified: null,
//   image: 'https://avatars.githubusercontent.com/u/157248212?v=4',
//   password: null,
//   role: 'User',
//   createdAt: 2024-07-23T00:42:57.777Z,
//   updatedAt: 2024-07-23T00:42:57.777Z
// }

// account {
//   provider: 'github',
//   type: 'oauth',
//   providerAccountId: '157248212',
//   access_token: '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',
//   token_type: 'bearer',
//   scope: 'read:user,user:email'
// }

// CREDENTIALS

// token {
//   name: undefined,
//   email: '123@123',
//   picture: undefined,
//   sub: '669efd8a8ca8a9ca3eb913c8'
// }

// user { id: '669efd8a8ca8a9ca3eb913c8', username: '123', email: '123@123' }

// account {
//   providerAccountId: '669efd8a8ca8a9ca3eb913c8',
//   type: 'credentials',
//   provider: 'credentials'
// }

// session from auth {
//   user: { name: undefined, email: '123@123', image: undefined },
//   expires: '2024-08-22T00:58:36.501Z'
// }
// token from auth {
//   email: '123@123',
//   sub: '669efd8a8ca8a9ca3eb913c8',
//   role: 'User',
//   provider: 'credentials',
//   iat: 1721696316,
//   exp: 1724288316,
//   jti: 'f0344fbe-31cd-44e0-9947-9a7ed2a02f7a'
// }
