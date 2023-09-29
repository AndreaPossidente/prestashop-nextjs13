"use client";
import { signOut } from "next-auth/react";
import { IoLogOutOutline } from "react-icons/io5";

export default function SignOutButton() {
  return (
    <a
      onClick={(e) => {
        e.preventDefault;
        signOut();
      }}
      style={{
        cursor: "pointer",
      }}
    >
      <IoLogOutOutline size="1.5rem" style={{ margin: "0.25rem auto" }} />
      <div>Esci</div>
    </a>
  );
}
