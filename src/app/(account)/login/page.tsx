import "./login.scss";

import Link from "next/link";
import LoginForm from "./LoginForm";

// META DATA
import type { Metadata } from "next";
import { Configuration } from "@/Prestashop/models";
/** @type {import("next").Metadata} */
export async function generateMetadata(): Promise<Metadata> {
  const shop: Configuration = await Configuration.findOne({
    name: "PS_SHOP_NAME",
  });
  return {
    title: "Login | " + shop.value,
    description: "Login to your account",
  };
}

export default function LoginPage() {
  return (
    <main>
      <div className="wrapper">
        <div className="breadcrumb">
          <div className="container">
            <ul>
              <li>
                <Link href={`/`}>Home</Link> / Login
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
