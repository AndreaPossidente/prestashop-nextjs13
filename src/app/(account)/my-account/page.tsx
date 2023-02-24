import SignOutButton from "./SignOutButton";
import Link from "next/link";

import "./my-account.scss";
import { Suspense } from "react";
import UserInfo from "./UserInfo";
export const dynamic = "force-dynamic";

// META DATA
import type { Metadata } from "next";
import { Configuration } from "@/Prestashop/models";
/** @type {import("next").Metadata} */
export async function generateMetadata(): Promise<Metadata> {
  const shop: Configuration = await Configuration.findOne({
    name: "PS_SHOP_NAME",
  });
  return {
    title: "My Account | " + shop.value,
    description: "My account page",
  };
}

export default async function MyAccount() {
  return (
    <main>
      <div className="wrapper">
        <div className="breadcrumb">
          <div className="container">
            <ul>
              <li>
                <Link href={`/`}>Home</Link> / My Account
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div>
            <h1>My Account</h1>
            <hr />
            <Suspense fallback={<div className="animated-box"></div>}>
              {/* @ts-expect-error Server Component */}
              <UserInfo />
            </Suspense>
            <hr />
            <div>
              <Suspense fallback={<div className="animated-box"></div>}>
                <SignOutButton />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
