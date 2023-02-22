"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { IoLogOutOutline, IoPersonOutline } from "react-icons/io5";
export default function LoginIcon() {
  const { data: session } = useSession();

  if (session) {
    return (
      <a
        onClick={(e) => {
          e.preventDefault;
          signOut();
        }}
        style={{ cursor: "pointer" }}
        className="header-icon"
      >
        <IoLogOutOutline size="1.5rem" style={{ margin: "0.25rem auto" }} />
        <span>Esci {session.user?.firstname}</span>
      </a>
    );
  }
  return (
    <a
      onClick={(e) => {
        e.preventDefault;
        signIn();
      }}
      style={{ cursor: "pointer" }}
      className="header-icon"
    >
      <IoPersonOutline size="1.5rem" style={{ margin: "0.25rem auto" }} />
      <span>Accedi</span>
    </a>
  );
}
