import Model from "./Model";

export default class OrderState extends Model {
  static ENDPOINT = "order_states";

  id: number;
  unremovable: boolean;
  delivery: boolean;
  hidden: boolean;
  send_email: boolean;
  module_name: string;
  invoice: boolean;
  color: string;
  logable: boolean;
  shipped: boolean;
  paid: boolean;
  pdf_delivery: boolean;
  pdf_invoice: boolean;
  deleted: boolean;
  name: string;
  template: string;

  constructor(orderState: OrderStateSchema) {
    super();
    this.id = orderState.id;
    this.unremovable = orderState.unremovable == 1 ? true : false;
    this.delivery = orderState.delivery == 1 ? true : false;
    this.hidden = orderState.hidden == 1 ? true : false;
    this.send_email = orderState.send_email == 1 ? true : false;
    this.module_name = orderState.module_name;
    this.invoice = orderState.invoice == 1 ? true : false;
    this.color = orderState.color;
    this.logable = orderState.logable == 1 ? true : false;
    this.shipped = orderState.shipped == 1 ? true : false;
    this.paid = orderState.paid == 1 ? true : false;
    this.pdf_delivery = orderState.pdf_delivery == 1 ? true : false;
    this.pdf_invoice = orderState.pdf_invoice == 1 ? true : false;
    this.deleted = orderState.deleted == 1 ? true : false;
    this.name = orderState.name;
    this.template = orderState.template;
  }
}
