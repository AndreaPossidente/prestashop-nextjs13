import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Customer } from "@/Prestashop/models";
import { getServerSession } from "next-auth/next";

import "./my-account.scss";

export const dynamic = "force-dynamic";

export default async function UserInfo() {
  const session = await getServerSession(authOptions);
  const user: Customer = session
    ? await Customer.findOne({ id: session?.user.id })
    : null;

  return (
    <p>
      {user.firstname} {user.lastname}
    </p>
  );
}
