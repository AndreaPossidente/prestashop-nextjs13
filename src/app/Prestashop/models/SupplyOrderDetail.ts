import Model from "./Model";

export default class SupplyOrderDetail extends Model {
  static ENDPOINT = "supply_order_details";

  id: number;
  id_supply_order: number;
  id_product_attribute: number;
  reference: string;
  supplier_reference: string;
  name: string;
  ean13: string;
  isbn: string;
  upc: string;
  mpn: string;
  exchange_rate: number;
  unit_price_te: number;
  quantity_expected: number;
  quantity_received: number;
  price_te: number;
  discount_rate: number;
  discount_value_te: number;
  price_with_discount_te: number;
  tax_rate: number;
  tax_value: number;
  price_ti: number;
  tax_value_with_order_discount: number;
  price_with_order_discount_te: number;

  constructor(supplyOrderDetail: SupplyOrderDetailSchema) {
    super();
    this.id = supplyOrderDetail.id;
    this.id_supply_order = supplyOrderDetail.id_supply_order;
    this.id_product_attribute = supplyOrderDetail.id_product_attribute;
    this.reference = supplyOrderDetail.reference;
    this.supplier_reference = supplyOrderDetail.supplier_reference;
    this.name = supplyOrderDetail.name;
    this.ean13 = supplyOrderDetail.ean13;
    this.isbn = supplyOrderDetail.isbn;
    this.upc = supplyOrderDetail.upc;
    this.mpn = supplyOrderDetail.mpn;
    this.exchange_rate = Number(supplyOrderDetail.exchange_rate);
    this.unit_price_te = Number(supplyOrderDetail.unit_price_te);
    this.quantity_expected = supplyOrderDetail.quantity_expected;
    this.quantity_received = supplyOrderDetail.quantity_received;
    this.price_te = Number(supplyOrderDetail.price_te);
    this.discount_rate = Number(supplyOrderDetail.discount_rate);
    this.discount_value_te = Number(supplyOrderDetail.discount_value_te);
    this.price_with_discount_te = Number(
      supplyOrderDetail.price_with_discount_te
    );
    this.tax_rate = Number(supplyOrderDetail.tax_rate);
    this.tax_value = Number(supplyOrderDetail.tax_value);
    this.price_ti = Number(supplyOrderDetail.price_ti);
    this.tax_value_with_order_discount = Number(
      supplyOrderDetail.tax_value_with_order_discount
    );
    this.price_with_order_discount_te = Number(
      supplyOrderDetail.price_with_order_discount_te
    );
  }
}
