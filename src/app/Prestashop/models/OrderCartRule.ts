import Model from "./Model";
import Order from "./Order";
import OrderInvoice from "./OrderInvoice";

export default class OrderCartRule extends Model {
  static ENDPOINT = "order_cart_rules";

  id: number;
  id_order: number;
  id_order_invoice: number;
  name: string;
  value: number;
  value_tax_excl: number;
  free_shipping: boolean;
  deleted: boolean;

  constructor(orderCartRule: OrderCartRuleSchema) {
    super();
    this.id = orderCartRule.id;
    this.id_order = orderCartRule.id_order;
    this.id_order_invoice = orderCartRule.id_order_invoice;
    this.name = orderCartRule.name;
    this.value = Number(orderCartRule.value);
    this.value_tax_excl = Number(orderCartRule.value_tax_excl);
    this.free_shipping = orderCartRule.free_shipping == 1 ? true : false;
    this.deleted = orderCartRule.deleted == 1 ? true : false;
  }

  async order() {
    return await Order.findById(this.id_order);
  }

  async orderInvoice() {
    return await OrderInvoice.findById(this.id_order_invoice);
  }
}
