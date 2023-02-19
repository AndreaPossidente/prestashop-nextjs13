import Cart from "./Cart";
import Customer from "./Customer";
import Employee from "./Employee";
import Model from "./Model";
import Order from "./Order";

export default class Message extends Model {
  static ENDPOINT = "messages";

  id: number;
  id_cart: number;
  id_order: number;
  id_customer: number;
  id_employee: number;
  message: string;
  private: boolean;
  date_add: Date;

  constructor(message: MessageSchema) {
    super();
    this.id = message.id;
    this.id_cart = message.id_cart;
    this.id_order = message.id_order;
    this.id_customer = message.id_customer;
    this.id_employee = message.id_employee;
    this.message = message.message;
    this.private = message.private == 1 ? true : false;
    this.date_add = new Date(message.date_add);
  }

  async cart() {
    return await Cart.findById(this.id_cart);
  }

  async order() {
    return await Order.findById(this.id_order);
  }

  async customer() {
    return await Customer.findById(this.id_customer);
  }

  async employee() {
    return await Employee.findById(this.id_employee);
  }
}
