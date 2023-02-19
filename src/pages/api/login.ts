import Authentication from "@/Prestashop/services/Authentication";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req;

  const email: string | undefined = query?.email as string | undefined;
  const password: string | undefined = query?.password as string | undefined;

  if (!email && !password)
    res.status(400).json({
      success: false,
      errors: {
        email: "Email field is required",
        password: "Password field is required",
      },
    });

  if (!email)
    res.status(400).json({
      success: false,
      errors: {
        email: "Email field is required",
      },
    });

  if (!password)
    res.status(400).json({
      success: false,
      errors: {
        password: "Password field is required",
      },
    });

  if (email && password) {
    const auth: AuthResponse = await Authentication.login(email, password);

    if (auth.success) {
      res.status(200).json(auth);
    } else {
      res.status(400).json(auth);
    }
  }
}
