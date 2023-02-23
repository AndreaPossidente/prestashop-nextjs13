import SignOutButton from "./SignOutButton";
import Link from "next/link";

import "./my-account.scss";
import { Suspense } from "react";
import UserInfo from "./UserInfo";

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
            <Suspense fallback={<div>loading...</div>}>
              {/* @ts-expect-error Server Component */}
              <UserInfo />
            </Suspense>
            <div>
              <Suspense fallback={<div>loading...</div>}>
                <SignOutButton />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
