import Authentication from "@/Prestashop/services/Authentication";
import NextAuth, {
  extendedJWT,
  NextAuthOptions,
  User,
  UserResponse,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Login",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const userResponse = (await Authentication.login(
          credentials?.email || "",
          credentials?.password || ""
        )) as UserResponse;

        if (userResponse?.success) {
          return userResponse?.user as User;
        }

        throw new Error(JSON.stringify(userResponse));
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    async session({ session, token, user }) {
      const extToken = token as extendedJWT;
      delete extToken.user.accessToken;
      session.user = extToken.user;
      return session;
    },
    async jwt({ token, account, profile, isNewUser, user }) {
      const extToken = token as extendedJWT;
      if (user) {
        extToken.user = user;
      }
      return extToken;
    },
  },
};

export default NextAuth(authOptions);
