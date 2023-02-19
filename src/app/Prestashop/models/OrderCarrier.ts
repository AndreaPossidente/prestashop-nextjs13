import Carrier from "./Carrier";
import Model from "./Model";
import Order from "./Order";
import OrderInvoice from "./OrderInvoice";

export default class OrderCarrier extends Model {
  static ENDPOINT = "order_carriers";

  id: number;
  id_order: number;
  id_carrier: number;
  id_order_invoice: number;
  weight: number;
  shipping_cost_tax_excl: number;
  shipping_cost_tax_incl: number;
  tracking_number: string;
  date_add: Date;

  constructor(orderCarrier: OrderCarrierSchema) {
    super();
    this.id = orderCarrier.id;
    this.id_order = orderCarrier.id_order;
    this.id_carrier = orderCarrier.id_carrier;
    this.id_order_invoice = orderCarrier.id_order_invoice;
    this.weight = Number(orderCarrier.weight);
    this.shipping_cost_tax_excl = Number(orderCarrier.shipping_cost_tax_excl);
    this.shipping_cost_tax_incl = Number(orderCarrier.shipping_cost_tax_incl);
    this.tracking_number = orderCarrier.tracking_number;
    this.date_add = new Date(orderCarrier.date_add);
  }

  async order() {
    return await Order.findById(this.id_order);
  }

  async carrier() {
    return await Carrier.findById(this.id_carrier);
  }

  async orderInvoice() {
    return await OrderInvoice.findById(this.id_order_invoice);
  }
}
