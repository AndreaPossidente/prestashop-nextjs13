"use client";
import { useSession } from "next-auth/react";
import SignInButton from "./SignInButton";
import MyAccountButton from "./MyAccountButton";
export default function LoginIcon() {
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
