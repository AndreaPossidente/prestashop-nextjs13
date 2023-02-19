import Customer from "./Customer";
import Model from "./Model";
import Order from "./Order";

export default class OrderSlip extends Model {
  static ENDPOINT = "order_slip";

  id: number;
  id_customer: number;
  id_order: number;
  conversion_rate: number;
  total_products_tax_excl: number;
  total_products_tax_incl: number;
  total_shipping_tax_excl: number;
  total_shipping_tax_incl: number;
  amount: number;
  shipping_cost: number;
  shipping_cost_amount: number;
  partial: boolean;
  date_add: Date;
  date_upd: Date;
  order_slip_type: number;
  associations: Association;

  constructor(orderSlip: OrderSlipSchema) {
    super();
    this.id = orderSlip.id;
    this.id_customer = orderSlip.id_customer;
    this.id_order = orderSlip.id_order;
    this.conversion_rate = Number(orderSlip.conversion_rate);
    this.total_products_tax_excl = Number(orderSlip.total_products_tax_excl);
    this.total_products_tax_incl = Number(orderSlip.total_products_tax_incl);
    this.total_shipping_tax_excl = Number(orderSlip.total_shipping_tax_excl);
    this.total_shipping_tax_incl = Number(orderSlip.total_shipping_tax_incl);
    this.amount = Number(orderSlip.amount);
    this.shipping_cost = Number(orderSlip.shipping_cost);
    this.shipping_cost_amount = Number(orderSlip.shipping_cost_amount);
    this.partial = orderSlip.partial == 1 ? true : false;
    this.date_add = new Date(orderSlip.date_add);
    this.date_upd = new Date(orderSlip.date_upd);
    this.order_slip_type = orderSlip.order_slip_type;

    const OrderSlipDetails: OrderSlipDetail[] = new Array();

    orderSlip.associations.order_slip_details?.forEach(
      (orderSlipDetail: OrderSlipDetailSchema) => {
        OrderSlipDetails.push({
          id: orderSlipDetail.id,
          id_order_detail: orderSlipDetail.id_order_detail,
          product_quantity: orderSlipDetail.product_quantity,
          amount_tax_excl: Number(orderSlipDetail.amount_tax_excl),
          amount_tax_incl: Number(orderSlipDetail.amount_tax_incl),
        } as OrderSlipDetail);
      }
    );

    this.associations = { order_slip_details: OrderSlipDetails } as Association;
  }

  async customer() {
    return await Customer.findById(this.id_customer);
  }

  async order() {
    return await Order.findById(this.id_order);
  }
}
