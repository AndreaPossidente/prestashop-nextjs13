import Prestashop from "../Prestashop";

const bcrypt = require("bcryptjs");
export default class Authentication extends Prestashop {
  static async login(email: string, password: string) {
    const uri = `${this.PS_URI}/api/customers?ws_key=${this.PS_API_KEY}&io_format=JSON&display=[id,passwd]&filter[email]=[${email}]`;
    const userRes = await fetch(uri, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 0 },
    });
    const json = await userRes.json();
    const user = json.customers[0];
    const isValid = await bcrypt.compare(password, user.passwd);
    if (isValid) {
      // IMPLEMENTARE TOKEN JWT
      console.log("password valid");
    } else {
      // password non valida
      console.log("password not valid");
    }
  }
}
