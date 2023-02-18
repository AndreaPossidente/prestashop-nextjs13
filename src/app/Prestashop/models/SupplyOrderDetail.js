import Model from "./Model";

export default class SupplyOrderDetail extends Model {
  static ENDPOINT = "supply_order_details";

  constructor(supplyOrderDetails) {
    super();
    this.id = supplyOrderDetails.id;
  }

  // id_supply_order	isUnsignedId	✔️
  // id_product	isUnsignedId	✔️	Product ID
  // id_product_attribute	isUnsignedId	✔️	Product attribute ID
  // reference	isReference	❌
  // supplier_reference	isReference	❌
  // name	isGenericName	✔️
  // ean13	isEan13	❌
  // isbn	isIsbn	❌
  // upc	isUpc	❌
  // mpn	isMpn	❌
  // exchange_rate	isFloat	✔️
  // unit_price_te	isPrice	✔️
  // quantity_expected	isUnsignedInt	✔️
  // quantity_received	isUnsignedInt	❌
  // price_te	isPrice	✔️
  // discount_rate	isFloat	✔️
  // discount_value_te	isPrice	✔️
  // price_with_discount_te	isPrice	✔️
  // tax_rate	isFloat	✔️
  // tax_value	isPrice	✔️
  // price_ti	isPrice	✔️
  // tax_value_with_order_discount	isFloat	✔️
  // price_with_order_discount_te	isPrice	✔️

  // add non static CRUD
}
