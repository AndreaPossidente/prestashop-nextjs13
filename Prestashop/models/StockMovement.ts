import Model from "./Model";
import Product from "./Product";
import Currency from "./Currency";
import Employee from "./Employee";
import Order from "./Order";
import StockMovementReason from "./StockMovementReason";
import ProductOption from "./ProductOption";
import Stock from "./Stock";
import Warehouse from "./Warehouse";
import SupplyOrder from "./SupplyOrder";

export default class StockMovement extends Model {
  static ENDPOINT = "stock_movements";

  id: number;
  id_product: number;
  id_product_attribute: number;
  id_warehouse: number;
  id_currency: number;
  id_employee: number;
  id_stock: number;
  id_stock_mvt_reason: number;
  id_order: number;
  id_supply_order: number;
  management_type: string;
  product_name: string;
  ean13: string;
  upc: string;
  reference: string;
  mpn: string;
  physical_quantity: number;
  sign: number;
  last_wa: number;
  current_wa: number;
  price_te: number;
  date_add: Date;

  constructor(stockMovement: StockMovementSchema) {
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
    this.last_wa = Number(stockMovement.last_wa);
    this.current_wa = Number(stockMovement.current_wa);
    this.price_te = Number(stockMovement.price_te);
    this.date_add = new Date(stockMovement.date_add);
  }

  async product() {
    return await Product.findById(this.id_product);
  }

  async productAttribute() {
    return await ProductOption.findById(this.id_product_attribute);
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
}
