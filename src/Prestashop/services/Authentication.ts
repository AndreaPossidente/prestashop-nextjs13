import Prestashop from "@/Prestashop/Prestashop";
import { Customer } from "../models";

const bcrypt = require("bcryptjs");
export default class Authentication extends Prestashop {
  static async login(email: string, password: string): Promise<AuthResponse> {
    const uri = `${this.PS_URI}/api/customers?ws_key=${this.PS_API_KEY}&io_format=JSON&display=[id,passwd]&filter[email]=[${email}]`;
    const userRes = await fetch(uri, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 0 },
    });

    const json: { customers: Customer[] } = await userRes.json();

    const user: Customer | undefined =
      json.customers?.length > 0 ? json.customers[0] : undefined;

    if (user) {
      const isValid = await bcrypt.compare(password, user?.passwd);
      if (isValid) {
        // IMPLEMENTARE TOKEN JWT
        return {
          success: true,
          message: "password valid",
          accessToken: "accesstokenwillbesenthere",
        } as AuthResponse;
      } else {
        // password non valida
        return {
          success: false,
          errors: {
            password: "Password not valid",
          },
        } as AuthResponse;
      }
    } else {
      return {
        success: false,
        errors: {
          email: "Email not valid",
        },
      } as AuthResponse;
    }
  }
}
