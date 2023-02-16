import Model from "./Model";
import Product from "./Product";
import Currency from "./Currency";
import Employee from "./Employee";
import Order from "./Order";
import StockMovementReason from "./StockMovementReason";

export default class StockMovement extends Model {
  static ENDPOINT = "stock_Movement";

  constructor(stockMovement) {
    super();
    this.id = stockMovement.id;
    this.id_product = stockMovement.id_product;
    this.id_product_attribute = stockMovement.id_product_attribute;
    this.id_warehouse = stockMovement.id_warehouse;
    this.id_currency = stockMovement.id_currency;
    this.management_type = stockMovement.management_type;
    this.id_employee = stockMovement.id_employee;
    this.id_stock = stockMovement.id_stock;
    this.id_stock_mvt_reason = stockMovement.id_stock_mvt_reason;
    this.id_order = stockMovement.id_order;
    this.id_supply_order = stockMovement.id_supply_order;
    this.product_name = stockMovement.product_name;
    this.ean13 = stockMovement.ean13;
    this.upc = stockMovement.upc;
    this.reference = stockMovement.reference;
    this.mpn = stockMovement.mpn;
    this.physical_quantity = stockMovement.physical_quantity;
    this.sign = stockMovement.sign;
    this.last_wa = stockMovement.last_wa;
    this.current_wa = stockMovement.current_wa;
    this.price_te = stockMovement.price_te;
    this.date_add = stockMovement.date_add;
  }

  async product() {
    return await Product.findById(this.id_product);
  }

  async productAttribute() {
    return await ProductAttribute.findById(this.id_product_attribute);
  }

  async warehouse() {
    return await Warehouse.findById(this.id_warehouse);
  }

  async currency() {
    return await Currency.findById(this.id_currency);
  }

  async employee() {
    return await Employee.findById(this.id_employee);
  }

  async stock() {
    return await Stock.findById(this.id_stock);
  }

  async stockMovementReason() {
    return await StockMovementReason.findById(this.id_stock_mvt_reason);
  }

  async order() {
    return await Order.findById(this.id_order);
  }

  async supplyOrder() {
    return await SupplyOrder.findById(this.id_supply_order);
  }

  // id_product		❌	Product ID
  // id_product_attribute		❌	Product attribute ID
  // id_warehouse		❌	Warehouse ID
  // id_currency		❌	Currency ID
  // management_type		❌
  // id_employee	isUnsignedId	✔️	Employee ID
  // id_stock	isUnsignedId	✔️
  // id_stock_mvt_reason	isUnsignedId	✔️
  // id_order	isUnsignedId	❌	Order ID
  // id_supply_order	isUnsignedId	❌
  // product_name		❌
  // ean13		❌
  // upc		❌
  // reference		❌
  // mpn		❌
  // physical_quantity	isUnsignedInt	✔️
  // sign	isInt	✔️
  // last_wa	isPrice	❌
  // current_wa	isPrice	❌
  // price_te	isPrice	✔️
  // date_add	isDate	✔️

  // add non static CRUD
}
