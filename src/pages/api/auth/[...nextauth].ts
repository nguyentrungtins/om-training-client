import NextAuth from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import axios from "axios";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile(profile: GoogleProfile) {
        // console.log("Google profile; ", profile);
        return {
          name: profile.name,
          email: profile.email,
          role: profile.role ?? "guest",
          id: profile.sub.toString(),
          image: profile.picture,
        };
      },
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const userCredential = await axios
          .post("http://localhost:8090/api/v1/user/login", {
            email: email,
            password: password,
          })
          .then((res) => res.data);
        if (userCredential.data.status === 404) {
          throw new Error("invalid credentials");
        }
        return userCredential?.data;
      },
    }),
  ],
  callbacks: {
    // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    // If you want to use the role in client components
    async session({ session, token }: { session: any; token: any }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.token = token;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login", //Need to define custom login page (if using)
  },

  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
