import Employee from "./Employee";
import Model from "./Model";

export default class OrderHistory extends Model {
  static ENDPOINT = "order_histories";

  constructor(orderHistory) {
    super();
    this.id = orderHistory.id;
    this.id_employee = orderHistory.id_employee;
    this.id_order_state = orderHistory.id_order_state;
    this.id_order = orderHistory.id_order;
    this.date_add = orderHistory.date_add;
  }

  async employee() {
    return await Employee.findById(this.id_employee);
  }

  async orderState() {
    return await OrderState.findById(this.id_order_state);
  }

  async order() {
    return await Order.findById(this.id_order);
  }

  //   id_employee	isUnsignedId	❌	Employee ID
  //   id_order_state	isUnsignedId	✔️
  //   id_order	isUnsignedId	✔️	Order ID
  //   date_add	isDate	❌

  // add non static CRUD
}
