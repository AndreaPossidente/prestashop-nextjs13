import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
export default async function LoginIcon() {
  const session = await getServerSession(authOptions);

  if (session) {
    return <SignOutButton firstname={session.user?.firstname || ""} />;
  }
  return <SignInButton />;
}
