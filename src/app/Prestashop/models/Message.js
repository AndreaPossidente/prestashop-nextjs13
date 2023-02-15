import Cart from "./Cart";
import Customer from "./Customer";
import Employee from "./Employee";
import Model from "./Model";

export default class Message extends Model {
  static ENDPOINT = "messages";

  constructor(message) {
    super();
    this.id = message.id;
    this.id_cart = message.id_cart;
    this.id_order = message.id_order;
    this.id_customer = message.id_customer;
    this.id_employee = message.id_employee;
    this.message = message.message;
    this.private = message.private;
    this.date_add = message.date_add;
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

  //   id_cart	isUnsignedId	❌		Cart ID
  //   id_order	isUnsignedId	❌		Order ID
  //   id_customer	isUnsignedId	❌		Customer ID
  //   id_employee	isUnsignedId	❌		Employee ID
  //   message	isCleanHtml	✔️	1600
  //   private	isBool	❌
  //   date_add	isDate	❌

  // add non static CRUD
}
