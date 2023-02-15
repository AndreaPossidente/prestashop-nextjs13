import Model from "./Model";

export default class OrderInvoice extends Model {
  static ENDPOINT = "order_invoices";

  constructor(orderInvoice) {
    super();
    this.id = orderInvoice.id;
    this.id_order = orderInvoice.id_order;
    this.delivery_number = orderInvoice.delivery_number;
    this.delivery_date = orderInvoice.delivery_date;
    this.total_discount_tax_excl = orderInvoice.total_discount_tax_excl;
    this.total_discount_tax_incl = orderInvoice.total_discount_tax_incl;
    this.total_paid_tax_excl = orderInvoice.total_paid_tax_excl;
    this.total_paid_tax_incl = orderInvoice.total_paid_tax_incl;
    this.total_products = orderInvoice.total_products;
    this.total_products_wt = orderInvoice.total_products_wt;
    this.total_shipping_tax_excl = orderInvoice.total_shipping_tax_excl;
    this.total_shipping_tax_incl = orderInvoice.total_shipping_tax_incl;
    this.shipping_tax_computation_method =
      orderInvoice.shipping_tax_computation_method;
    this.total_wrapping_tax_excl = orderInvoice.total_wrapping_tax_excl;
    this.total_wrapping_tax_incl = orderInvoice.total_wrapping_tax_incl;
    this.shop_address = orderInvoice.shop_address;
    this.note = orderInvoice.note;
    this.date_add = orderInvoice.date_add;
  }

  async order() {
    return await Order.findById(this.id_order);
  }

  // id_order	isUnsignedId	✔️		Order ID
  // number	isUnsignedId	✔️
  // delivery_number	isUnsignedId	❌
  // delivery_date	isDateFormat	❌
  // total_discount_tax_excl		❌
  // total_discount_tax_incl		❌
  // total_paid_tax_excl		❌
  // total_paid_tax_incl		❌
  // total_products		❌
  // total_products_wt		❌
  // total_shipping_tax_excl		❌
  // total_shipping_tax_incl		❌
  // shipping_tax_computation_method		❌
  // total_wrapping_tax_excl		❌
  // total_wrapping_tax_incl		❌
  // shop_address	isCleanHtml	❌	1000
  // note	isCleanHtml	❌	65000
  // date_add	isDate	❌

  // add non static CRUD
}
