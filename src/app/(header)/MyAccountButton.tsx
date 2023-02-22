import Link from "next/link";
import React from "react";
import { IoPersonOutline } from "react-icons/io5";

export default function MyAccountButton({
  firstname,
  lastname,
}: {
  firstname: string;
  lastname: string;
}) {
  return (
    <Link
      href={"/my-account"}
      style={{ cursor: "pointer" }}
      className="header-icon"
    >
      <IoPersonOutline size="1.5rem" style={{ margin: "0.25rem auto" }} />
      <span>
        {firstname} {lastname}
      </span>
    </Link>
  );
}
