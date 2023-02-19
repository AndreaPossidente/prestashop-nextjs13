import Employee from "./Employee";
import Model from "./Model";
import SupplyOrderDetail from "./SupplyOrderDetail";
import SupplyOrderState from "./SupplyOrderState";

export default class SupplyOrderReceiptHistory extends Model {
  static ENDPOINT = "supply_order_receipt_histories";

  id: number;
  id_supply_order_detail: number;
  id_supply_order_state: number;
  id_employee: number;
  employee_firstname: string;
  employee_lastname: string;
  quantity: number;
  date_add: Date;

  constructor(supplyOrderReceiptHistory: SupplyOrderReceiptHistorySchema) {
    super();
    this.id = supplyOrderReceiptHistory.id;
    this.id_supply_order_detail =
      supplyOrderReceiptHistory.id_supply_order_detail;
    this.id_supply_order_state =
      supplyOrderReceiptHistory.id_supply_order_state;
    this.id_employee = supplyOrderReceiptHistory.id_employee;
    this.employee_firstname = supplyOrderReceiptHistory.employee_firstname;
    this.employee_lastname = supplyOrderReceiptHistory.employee_lastname;
    this.quantity = supplyOrderReceiptHistory.quantity;
    this.date_add = new Date(supplyOrderReceiptHistory.date_add);
  }

  async supplyOrderDetail() {
    return await SupplyOrderDetail.findById(this.id_supply_order_detail);
  }

  async supplyOrderState() {
    return await SupplyOrderState.findById(this.id_supply_order_state);
  }

  async employee() {
    return await Employee.findById(this.id_employee);
  }
}
