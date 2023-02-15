import Carrier from "./Carrier";
import Model from "./Model";

export default class OrderCarrier extends Model {
  static ENDPOINT = "order_carriers";

  constructor(orderCarrier) {
    super();
    this.id = orderCarrier.id;
    this.id_order = orderCarrier.id_order;
    this.id_carrier = orderCarrier.id_carrier;
    this.id_order_invoice = orderCarrier.id_order_invoice;
    this.weight = orderCarrier.weight;
    this.shipping_cost_tax_excl = orderCarrier.shipping_cost_tax_excl;
    this.shipping_cost_tax_incl = orderCarrier.shipping_cost_tax_incl;
    this.tracking_number = orderCarrier.tracking_number;
    this.date_add = orderCarrier.date_add;
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

  // id_order	isUnsignedId	✔️	Order ID
  // id_carrier	isUnsignedId	✔️	Carrier ID
  // id_order_invoice	isUnsignedId	❌	Order invoice ID
  // weight	isFloat	❌
  // shipping_cost_tax_excl	isFloat	❌
  // shipping_cost_tax_incl	isFloat	❌
  // tracking_number	isTrackingNumber	❌
  // date_add	isDate	❌

  // add non static CRUD
}
