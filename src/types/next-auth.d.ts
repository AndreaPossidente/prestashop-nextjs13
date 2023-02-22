import NextAuth, { User } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface Session {
    user: extendedUser;
  }

  type extendedUser = User & {
    firstname?: string | null;
    lastname?: string | null;
    accessToken?: string | null;
  };

  type extendedJWT = JWT & {
    user: extendedUser;
  };

  interface UserResponse {
    success: boolean;
    status: number;
    user?: extendedUser;
    errors?: {
      email?: string;
      password?: string;
    };
  }
}
