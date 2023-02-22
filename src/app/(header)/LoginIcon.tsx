"use client";
import { useSession } from "next-auth/react";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";
import SignInButton from "./SignInButton";
import MyAccountButton from "./MyAccountButton";
export default function LoginIcon() {
  // let session = await getServerSession(authOptions);

  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <MyAccountButton
          firstname={session.user?.firstname || ""}
          lastname={`${String(session.user?.lastname)[0]}.` || ""}
        />
      </div>
    );
  }
  return <SignInButton />;
}
