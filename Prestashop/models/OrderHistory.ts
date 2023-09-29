import Employee from "./Employee";
import Model from "./Model";
import Order from "./Order";
import OrderState from "./OrderState";

export default class OrderHistory extends Model {
  static ENDPOINT = "order_histories";

  id: number;
  id_employee: number;
  id_order_state: number;
  id_order: number;
  date_add: Date;

  constructor(orderHistory: OrderHistorySchema) {
    super();
    this.id = orderHistory.id;
    this.id_employee = orderHistory.id_employee;
    this.id_order_state = orderHistory.id_order_state;
    this.id_order = orderHistory.id_order;
    this.date_add = new Date(orderHistory.date_add);
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
}
