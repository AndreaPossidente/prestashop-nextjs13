import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Customer } from "@/Prestashop/models";
import { getServerSession } from "next-auth/next";
import Link from "next/link";

export default async function MyAccount() {
  const session = await getServerSession(authOptions);
  const user: Customer = session
    ? await Customer.findOne({ id: session?.user.id })
    : null;

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
            <p>
              {user.firstname || ""} {user.lastname || ""}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
