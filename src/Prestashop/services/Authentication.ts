import Prestashop from "@/Prestashop/Prestashop";
import { User, UserResponse } from "next-auth";
import { Customer } from "../models";

const bcrypt = require("bcryptjs");

export default class Authentication extends Prestashop {
  static async login(email: string, password: string): Promise<UserResponse> {
    if (email.length === 0 && password.length === 0) {
      return {
        success: false,
        status: 401,
        errors: {
          email: "Email field is required",
          password: "Password field is required",
        },
      } as UserResponse;
    }
    if (email.length === 0) {
      return {
        success: false,
        status: 401,
        errors: { email: "Email field is required" },
      } as UserResponse;
    }
    if (password.length === 0) {
      return {
        success: false,
        status: 401,
        errors: { password: "Password field is required" },
      } as UserResponse;
    }

    const uri = `${this.PS_URI}/api/customers?ws_key=${this.PS_API_KEY}&io_format=JSON&display=full&filter[email]=[${email}]`;
    const res = await fetch(uri, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 0 },
    });

    const json: { customers: Customer[] } = await res.json();

    const user: Customer | undefined =
      json.customers?.length > 0 ? json.customers[0] : undefined;

    if (user) {
      const isValid = await bcrypt.compare(password, user.passwd);
      if (isValid) {
        // IMPLEMENTARE TOKEN JWT
        return {
          success: true,
          status: 200,
          user: {
            id: String(user.id),
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            accessToken: "accesstokenwillbesenthere",
          } as User,
        };
      } else {
        // password non valida
        return {
          success: false,
          status: 401,
          errors: { password: "Password not vaild" },
        } as UserResponse;
      }
    } else {
      // email non valida
      return {
        success: false,
        status: 401,
        errors: { email: "Email not vaild" },
      } as UserResponse;
    }
  }
}
