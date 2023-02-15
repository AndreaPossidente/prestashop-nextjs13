import Model from "./Model";

export default class OrderDetail extends Model {
  static ENDPOINT = "order_details";

  constructor(orderDetail) {
    super();
    this.id = orderDetail.id;
    this.id_order = orderDetail.id_order;
    this.product_id = orderDetail.product_id;
    this.product_attribute_id = orderDetail.product_attribute_id;
    this.product_quantity_reinjected = orderDetail.product_quantity_reinjected;
    this.group_reduction = orderDetail.group_reduction;
    this.discount_quantity_applied = orderDetail.discount_quantity_applied;
    this.download_hash = orderDetail.download_hash;
    this.download_deadline = orderDetail.download_deadline;
    this.id_order_invoice = orderDetail.id_order_invoice;
    this.id_warehouse = orderDetail.id_warehouse;
    this.id_shop = orderDetail.id_shop;
    this.id_customization = orderDetail.id_customization;
    this.product_name = orderDetail.product_name;
    this.product_quantity = orderDetail.product_quantity;
    this.product_quantity_in_stock = orderDetail.product_quantity_in_stock;
    this.product_quantity_return = orderDetail.product_quantity_return;
    this.product_quantity_refunded = orderDetail.product_quantity_refunded;
    this.product_price = orderDetail.product_price;
    this.reduction_percent = orderDetail.reduction_percent;
    this.reduction_amount = orderDetail.reduction_amount;
    this.reduction_abount_tax_incl = orderDetail.reduction_abount_tax_incl;
    this.reduction_abount_tax_excl = orderDetail.reduction_abount_tax_excl;
    this.product_quantity_discount = orderDetail.product_quantity_discount;
    this.product_ean13 = orderDetail.product_ean13;
    this.product_isbn = orderDetail.product_isbn;
    this.product_upc = orderDetail.product_upc;
    this.product_mpn = orderDetail.product_mpn;
    this.product_reference = orderDetail.product_reference;
    this.product_supplier_reference = orderDetail.product_supplier_reference;
    this.product_weight = orderDetail.product_weight;
    this.tax_computation_method = orderDetail.tax_computation_method;
    this.id_tax_rules_group = orderDetail.id_tax_rules_group;
    this.ecotax = orderDetail.ecotax;
    this.ecotax_tax_rate = orderDetail.ecotax_tax_rate;
    this.download_nb = orderDetail.download_nb;
    this.unit_price_tax_incl = orderDetail.unit_price_tax_incl;
    this.unit_price_tax_excl = orderDetail.unit_price_tax_excl;
    this.total_price_tax_incl = orderDetail.total_price_tax_incl;
    this.total_price_tax_excl = orderDetail.total_price_tax_excl;
    this.total_shipping_price_tax_incl =
      orderDetail.total_shipping_price_tax_incl;
    this.total_shipping_price_tax_excl =
      orderDetail.total_shipping_price_tax_excl;
    this.purchase_supplier_price = orderDetail.purchase_supplier_price;
    this.original_product_price = orderDetail.original_product_price;
    this.original_wholesale_price = orderDetail.original_wholesale_price;
    this.total_refunded_tax_incl = orderDetail.total_refunded_tax_incl;
    this.total_refunded_tax_excl = orderDetail.total_refunded_tax_excl;
    this.associations = orderDetail.associations;
  }

  // id_order	isUnsignedId	✔️	Order ID
  // product_id	isUnsignedId	❌	Product ID
  // product_attribute_id	isUnsignedId	❌	Product attribute ID
  // product_quantity_reinjected	isUnsignedInt	❌
  // group_reduction	isFloat	❌
  // discount_quantity_applied	isInt	❌
  // download_hash	isGenericName	❌
  // download_deadline	isDateFormat	❌
  // id_order_invoice	isUnsignedId	❌	Order invoice ID
  // id_warehouse	isUnsignedId	✔️	Warehouse ID
  // id_shop	isUnsignedId	✔️	Shop ID
  // id_customization	isUnsignedId	❌	Customization ID
  // product_name	isGenericName	✔️
  // product_quantity	isInt	✔️
  // product_quantity_in_stock	isInt	❌
  // product_quantity_return	isUnsignedInt	❌
  // product_quantity_refunded	isUnsignedInt	❌
  // product_price	isPrice	✔️
  // reduction_percent	isFloat	❌
  // reduction_amount	isPrice	❌
  // reduction_amount_tax_incl	isPrice	❌
  // reduction_amount_tax_excl	isPrice	❌
  // product_quantity_discount	isFloat	❌
  // product_ean13	isEan13	❌
  // product_isbn	isIsbn	❌
  // product_upc	isUpc	❌
  // product_mpn	isMpn	❌
  // product_reference	isReference	❌
  // product_supplier_reference	isReference	❌
  // product_weight	isFloat	❌
  // tax_computation_method	isUnsignedId	❌
  // id_tax_rules_group	isInt	❌	Tax rules group ID
  // ecotax	isFloat	❌
  // ecotax_tax_rate	isFloat	❌
  // download_nb	isInt	❌
  // unit_price_tax_incl	isPrice	❌
  // unit_price_tax_excl	isPrice	❌
  // total_price_tax_incl	isPrice	❌
  // total_price_tax_excl	isPrice	❌
  // total_shipping_price_tax_excl	isPrice	❌
  // total_shipping_price_tax_incl	isPrice	❌
  // purchase_supplier_price	isPrice	❌
  // original_product_price	isPrice	❌
  // original_wholesale_price	isPrice	❌
  // total_refunded_tax_excl	isPrice	❌
  // total_refunded_tax_incl	isPrice	❌
  // associations		❌

  // add non static CRUD
}
