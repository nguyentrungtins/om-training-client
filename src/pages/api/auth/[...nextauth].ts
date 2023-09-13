import NextAuth from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
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
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // perform you login logic
        // find out user from db
        if (email !== "admin" || password !== "123456") {
          throw new Error("invalid credentials");
        }

        // if everything is fine
        return {
          id: "1234",
          name: "John Doe",
          email: "admin",
          role: "admin",
        };
      },
    }),
  ],
  callbacks: {
    // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
    async jwt({ token, user, trigger }) {
      if (trigger === "update") {
        token.role = "guest";
      }
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    // If you want to use the role in client components
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.token = token;

        console.log("before: ", token.accessToken);
        // session.access_token = access_token;
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
