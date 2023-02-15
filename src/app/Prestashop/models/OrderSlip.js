import Customer from "./Customer";
import Model from "./Model";

export default class OrderSlip extends Model {
  static ENDPOINT = "order_slips";

  constructor(orderSlip) {
    super();
    this.id = orderSlip.id;
    this.id_customer = orderSlip.id_customer;
    this.id_order = orderSlip.id_order;
    this.conversion_rate = orderSlip.conversion_rate;
    this.total_products_tax_excl = orderSlip.total_products_tax_excl;
    this.total_products_tax_incl = orderSlip.total_products_tax_incl;
    this.total_shipping_tax_excl = orderSlip.total_shipping_tax_excl;
    this.total_shipping_tax_incl = orderSlip.total_shipping_tax_incl;
    this.amount = orderSlip.amount;
    this.shipping_cost = orderSlip.shipping_cost;
    this.shipping_cost_amount = orderSlip.shipping_cost_amount;
    this.partial = orderSlip.partial;
    this.date_add = orderSlip.date_add;
    this.date_upd = orderSlip.date_upd;
    this.order_slip_type = orderSlip.order_slip_type;
    this.associations = orderSlip.associations;
  }

  async customer() {
    return await Customer.findById(this.id_customer);
  }

  async order() {
    return await Order.findById(this.id_order);
  }

  // id_customer	isUnsignedId	✔️	Customer ID
  // id_order	isUnsignedId	✔️	Order ID
  // conversion_rate	isFloat	✔️
  // total_products_tax_excl	isFloat	✔️
  // total_products_tax_incl	isFloat	✔️
  // total_shipping_tax_excl	isFloat	✔️
  // total_shipping_tax_incl	isFloat	✔️
  // amount	isFloat	❌
  // shipping_cost		❌
  // shipping_cost_amount	isFloat	❌
  // partial		❌
  // date_add	isDate	❌
  // date_upd	isDate	❌
  // order_slip_type	isInt	❌
  // associations		❌

  // add non static CRUD
}
