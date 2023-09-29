"use client";
import { useSession } from "next-auth/react";
import SignInButton from "./SignInButton";
import MyAccountButton from "./MyAccountButton";

export default function LoginIcon() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <MyAccountButton
          firstname={session.user?.firstname || ""}
          lastname={`${String(session.user?.lastname)[0]}.` || ""}
        />
      ) : (
        <SignInButton />
      )}
    </>
  );
}
