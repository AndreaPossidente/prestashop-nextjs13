import Link from "next/link";
import { Key } from "react";

export default function MenuLink({
  keyPass,
  href,
  value,
  children,
}: {
  keyPass: Key;
  href: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <li key={keyPass}>
      <Link
        style={{ display: "flex", width: "100%", height: "100%" }}
        href={`/c/${href}`}
      >
        <span>{value}</span>
      </Link>
      {children}
    </li>
  );
}
