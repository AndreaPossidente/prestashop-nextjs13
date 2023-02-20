import Authentication from "@/Prestashop/services/Authentication";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "next-auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;

  const email = body.email;
  const password = body.password;

  if (!email && !password) {
    res.status(400).json({
      success: false,
      errors: {
        email: "Email field is required",
        password: "Password field is required",
      },
    });
    return;
  }

  if (!email) {
    res.status(400).json({
      success: false,
      errors: {
        email: "Email field is required",
      },
    });
    return;
  }

  if (!password) {
    res.status(400).json({
      success: false,
      errors: {
        password: "Password field is required",
      },
    });
    return;
  }

  if (email && password) {
    const auth: User | null = await Authentication.login(email, password);

    if (auth) {
      res.status(200).json(auth);
    } else {
      res.status(400).json(auth);
    }
    return;
  }
}
