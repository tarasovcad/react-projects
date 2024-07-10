import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoggleProvider from 'next-auth/providers/google';

export const options = {
  providers: [
    GithubProvider({
      profile(profile) {
        console.log('profile github: ', profile);
        let userRole = 'Github User';
        if (profile?.email === 'tarasovcad@gmail.com') {
          userRole = 'Admin';
        }
        // return { role: profile.role ?? 'user' };
        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoggleProvider({
      profile(profile) {
        console.log('profile goggle: ', profile);

        // return { role: profile.role ?? 'user' };
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
