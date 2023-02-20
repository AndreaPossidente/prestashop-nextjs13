import Link from "next/link";
import { Key } from "react";

export default async function MenuLink({
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
      <Link href={`${href}`}>{value}</Link>
      {children}
    </li>
  );
}
