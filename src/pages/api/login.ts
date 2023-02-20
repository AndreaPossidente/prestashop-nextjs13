import Authentication from "@/Prestashop/services/Authentication";
import { NextApiRequest, NextApiResponse } from "next";

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
    const auth: AuthResponse = await Authentication.login(email, password);
    console.log(auth);
    if (auth.success) {
      res.status(200).json(auth);
    } else {
      res.status(400).json(auth);
    }
    return;
  }
}
