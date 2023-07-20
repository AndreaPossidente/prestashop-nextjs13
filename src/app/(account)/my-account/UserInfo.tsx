import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Customer } from "@/Prestashop/models";
import { getServerSession } from "next-auth/next";
import { Suspense } from "react";

import "./my-account.scss";
import Orders from "./Orders";

export const dynamic = "force-dynamic";

export default async function UserInfo() {
  const session = await getServerSession(authOptions);
  const user: Customer = session
    ? await Customer.findOne({ id: session?.user.id })
    : null;

  return (
    <div>
      <div>
        {user.firstname} {user.lastname}
      </div>

      <h2>Orders</h2>
      <Suspense fallback={<div>loading...</div>}>
        {session?.user && (
          // @ts-expect-error Server Component
          <Orders userId={session.user.id} />
        )}
      </Suspense>
    </div>
  );
}
