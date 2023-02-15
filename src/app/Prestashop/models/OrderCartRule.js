import Model from "./Model";

export default class OrderCartRule extends Model {
  static ENDPOINT = "order_cart_rules";

  constructor(orderCartRule) {
    super();
    this.id = orderCartRule.id;
    this.id_order = orderCartRule.id_order;
    this.id_order_invoice = orderCartRule.id_order_invoice;
    this.name = orderCartRule.name;
    this.value = orderCartRule.value;
    this.value_tax_excl = orderCartRule.value_tax_excl;
    this.free_shipping = orderCartRule.free_shipping;
    this.deleted = orderCartRule.deleted;
  }

  async order() {
    return await Order.findById(this.id_order);
  }

  async orderInvoice() {
    return await OrderInvoice.findById(this.id_order_invoice);
  }

  // id_order	isUnsignedId	✔️	Order ID
  // id_cart_rule	isUnsignedId	✔️
  // id_order_invoice	isUnsignedId	❌	Order invoice ID
  // name	isCleanHtml	✔️
  // value	isFloat	✔️
  // value_tax_excl	isFloat	✔️
  // free_shipping	isBool	❌
  // deleted	isBool	❌

  // add non static CRUD
}
