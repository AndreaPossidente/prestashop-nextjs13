"use client";
import { SessionProvider } from "next-auth/react";
import type { SessionProviderProps } from "next-auth/react";

export default function Providers({ children, session }: SessionProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
