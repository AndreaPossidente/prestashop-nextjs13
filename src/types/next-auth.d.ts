import NextAuth, { User } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface User {
    /** The user's postal address. */
    id?: number;
    firstname?: string;
    lastname?: string;
    email?: string;
    accessToken?: string;
  }

  interface Session {
    user: User;
  }
}
