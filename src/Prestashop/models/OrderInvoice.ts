import Model from "./Model";
import Order from "./Order";

export default class OrderInvoice extends Model {
  static ENDPOINT = "order_invoices";

  id: number;
  id_order: number;
  delivery_number: number;
  delivery_date: Date;
  total_discount_tax_excl: number;
  total_discount_tax_incl: number;
  total_paid_tax_excl: number;
  total_paid_tax_incl: number;
  total_products: number;
  total_products_wt: number;
  total_shipping_tax_excl: number;
  total_shipping_tax_incl: number;
  shipping_tax_computation_method: string;
  total_wrapping_tax_excl: number;
  total_wrapping_tax_incl: number;
  shop_address: string;
  note: string;
  date_add: Date;

  constructor(orderInvoice: OrderInvoiceSchema) {
    super();
    this.id = orderInvoice.id;
    this.id_order = orderInvoice.id_order;
    this.delivery_number = orderInvoice.delivery_number;
    this.delivery_date = new Date(orderInvoice.delivery_date);
    this.total_discount_tax_excl = Number(orderInvoice.total_discount_tax_excl);
    this.total_discount_tax_incl = Number(orderInvoice.total_discount_tax_incl);
    this.total_paid_tax_excl = Number(orderInvoice.total_paid_tax_excl);
    this.total_paid_tax_incl = Number(orderInvoice.total_paid_tax_incl);
    this.total_products = Number(orderInvoice.total_products);
    this.total_products_wt = Number(orderInvoice.total_products_wt);
    this.total_shipping_tax_excl = Number(orderInvoice.total_shipping_tax_excl);
    this.total_shipping_tax_incl = Number(orderInvoice.total_shipping_tax_incl);
    this.shipping_tax_computation_method =
      orderInvoice.shipping_tax_computation_method;
    this.total_wrapping_tax_excl = Number(orderInvoice.total_wrapping_tax_excl);
    this.total_wrapping_tax_incl = Number(orderInvoice.total_wrapping_tax_incl);
    this.shop_address = orderInvoice.shop_address;
    this.note = orderInvoice.note;
    this.date_add = new Date(orderInvoice.date_add);
  }

  async order() {
    return await Order.findById(this.id_order);
  }
}
