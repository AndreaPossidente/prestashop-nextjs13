import Combination from "./Combination";
import Customization from "./Customization";
import Model from "./Model";
import Order from "./Order";
import OrderInvoice from "./OrderInvoice";
import Shop from "./Shop";

export default class OrderDetail extends Model {
  static ENDPOINT = "order_details";

  id: number;
  id_order: number;
  product_id: number;
  product_attribute_id: number;
  product_quantity_reinjected: number;
  group_reduction: number;
  discount_quantity_applied: number;
  download_hash: string;
  download_deadline: Date;
  id_order_invoice: number;
  id_warehouse: number;
  id_shop: number;
  id_customization: number;
  product_name: string;
  product_quantity: number;
  product_quantity_in_stock: number;
  product_quantity_return: number;
  product_quantity_refunded: number;
  product_price: number;
  reduction_percent: number;
  reduction_amount: number;
  reduction_amount_tax_incl: number;
  reduction_amount_tax_excl: number;
  product_quantity_discount: number;
  product_ean13: string;
  product_isbn: string;
  product_upc: string;
  product_mpn: string;
  product_reference: string;
  product_supplier_reference: string;
  product_weight: number;
  tax_computation_method: number;
  id_tax_rules_group: number;
  ecotax: number;
  ecotax_tax_rate: number;
  download_nb: number;
  unit_price_tax_incl: number;
  unit_price_tax_excl: number;
  total_price_tax_incl: number;
  total_price_tax_excl: number;
  total_shipping_price_tax_excl: number;
  total_shipping_price_tax_incl: number;
  purchase_supplier_price: number;
  original_product_price: number;
  original_wholesale_price: number;
  total_refunded_tax_excl: number;
  total_refunded_tax_incl: number;
  associations: AssociationSchema;

  constructor(orderDetail: OrderDetailSchema) {
    super();
    this.id = orderDetail.id;
    this.id_order = orderDetail.id_order;
    this.product_id = orderDetail.product_id;
    this.product_attribute_id = orderDetail.product_attribute_id;
    this.product_quantity_reinjected = orderDetail.product_quantity_reinjected;
    this.group_reduction = Number(orderDetail.group_reduction);
    this.discount_quantity_applied = orderDetail.discount_quantity_applied;
    this.download_hash = orderDetail.download_hash;
    this.download_deadline = new Date(orderDetail.download_deadline);
    this.id_order_invoice = orderDetail.id_order_invoice;
    this.id_warehouse = orderDetail.id_warehouse;
    this.id_shop = orderDetail.id_shop;
    this.id_customization = orderDetail.id_customization;
    this.product_name = orderDetail.product_name;
    this.product_quantity = orderDetail.product_quantity;
    this.product_quantity_in_stock = orderDetail.product_quantity_in_stock;
    this.product_quantity_return = orderDetail.product_quantity_return;
    this.product_quantity_refunded = orderDetail.product_quantity_refunded;
    this.product_price = Number(orderDetail.product_price);
    this.reduction_percent = Number(orderDetail.reduction_percent);
    this.reduction_amount = Number(orderDetail.reduction_amount);
    this.reduction_amount_tax_incl = Number(
      orderDetail.reduction_amount_tax_incl
    );
    this.reduction_amount_tax_excl = Number(
      orderDetail.reduction_amount_tax_excl
    );
    this.product_quantity_discount = Number(
      orderDetail.product_quantity_discount
    );
    this.product_ean13 = orderDetail.product_ean13;
    this.product_isbn = orderDetail.product_isbn;
    this.product_upc = orderDetail.product_upc;
    this.product_mpn = orderDetail.product_mpn;
    this.product_reference = orderDetail.product_reference;
    this.product_supplier_reference = orderDetail.product_supplier_reference;
    this.product_weight = Number(orderDetail.product_weight);
    this.tax_computation_method = orderDetail.tax_computation_method;
    this.id_tax_rules_group = orderDetail.id_tax_rules_group;
    this.ecotax = Number(orderDetail.ecotax);
    this.ecotax_tax_rate = Number(orderDetail.ecotax_tax_rate);
    this.download_nb = orderDetail.download_nb;
    this.unit_price_tax_incl = Number(orderDetail.unit_price_tax_incl);
    this.unit_price_tax_excl = Number(orderDetail.unit_price_tax_excl);
    this.total_price_tax_incl = Number(orderDetail.total_price_tax_incl);
    this.total_price_tax_excl = Number(orderDetail.total_price_tax_excl);
    this.total_shipping_price_tax_incl = Number(
      orderDetail.total_shipping_price_tax_incl
    );
    this.total_shipping_price_tax_excl = Number(
      orderDetail.total_shipping_price_tax_excl
    );
    this.purchase_supplier_price = Number(orderDetail.purchase_supplier_price);
    this.original_product_price = Number(orderDetail.original_product_price);
    this.original_wholesale_price = Number(
      orderDetail.original_wholesale_price
    );
    this.total_refunded_tax_incl = Number(orderDetail.total_refunded_tax_incl);
    this.total_refunded_tax_excl = Number(orderDetail.total_refunded_tax_excl);
    this.associations = orderDetail.associations;
  }

  async order() {
    return await Order.findById(this.id_order);
  }

  async productAttribute() {
    return await Combination.findById(this.product_attribute_id);
  }

  async orderInvoice() {
    return await OrderInvoice.findById(this.id_order_invoice);
  }

  // async warehouse() {
  //   return await Warehouse.findById(this.id_warehouse)
  // }

  async shop() {
    return await Shop.findById(this.id_shop);
  }

  async customization() {
    return await Customization.findById(this.id_customization);
  }

  // async taxRuleGroup() {
  //   return await TaxRuleGroup.findById(this.id_tax_rules_group)
  // }
}
