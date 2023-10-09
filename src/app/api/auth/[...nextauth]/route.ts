import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/database"
import { compare } from "bcrypt"

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login'
  },
  callbacks: {
    session: async({session, token}) => {
      if (token?.user) {
        session.user = token.user
      }
      return session
    },
    jwt: async ({user, token}) => {
      if (user) {
        token.user = {...user}
      }
      return token
    }
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {}
        if (!email || !password) {
          throw new Error("Missing username or password");
        }
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        // if user doesn't exist or password doesn't match
        if (!user || !(await compare(password, user.password))) {
          throw new Error("Invalid username or password");
        }
        return user;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };