import Employee from "./Employee";
import Model from "./Model";
import SupplyOrder from "./SupplyOrder";
import SupplyOrderState from "./SupplyOrderState";

export default class SupplyOrderHistory extends Model {
  static ENDPOINT = "supply_order_histories";

  id: number;
  id_supply_order: number;
  id_employee: number;
  id_state: number;
  employee_firstname: string;
  employee_lastname: string;
  date_add: Date;

  constructor(supplyOrderHistory: SupplyOrderHistorySchema) {
    super();
    this.id = supplyOrderHistory.id;
    this.id_supply_order = supplyOrderHistory.id_supply_order;
    this.id_employee = supplyOrderHistory.id_employee;
    this.id_state = supplyOrderHistory.id_state;
    this.employee_firstname = supplyOrderHistory.employee_firstname;
    this.employee_lastname = supplyOrderHistory.employee_lastname;
    this.date_add = new Date(supplyOrderHistory.date_add);
  }

  async supplyOrder() {
    return await SupplyOrder.findById(this.id_supply_order);
  }

  async state() {
    return await SupplyOrderState.findById(this.id_state);
  }

  async employee() {
    return await Employee.findById(this.id_employee);
  }
}
