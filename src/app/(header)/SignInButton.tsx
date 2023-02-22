"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { IoPersonOutline } from "react-icons/io5";

export default function SignInButton() {
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
