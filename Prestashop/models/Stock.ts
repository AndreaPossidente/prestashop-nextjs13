import Model from "./Model";
import Product from "./Product";
import ProductOption from "./ProductOption";
import Warehouse from "./Warehouse";

export default class Stock extends Model {
  static ENDPOINT = "stocks";

  id: number;
  id_warehouse: number;
  id_product: number;
  id_product_attribute: number;
  real_quantity: boolean;
  reference: string;
  ean13: string;
  isbn: string;
  upc: string;
  mpn: string;
  physical_quantity: number;
  usable_quantity: number;
  price_te: number;

  constructor(stock: StockSchema) {
    super();
    this.id = stock.id;
    this.id_warehouse = stock.id_warehouse;
    this.id_product = stock.id_product;
    this.id_product_attribute = stock.id_product_attribute;
    this.real_quantity = stock.real_quantity == 1 ? true : false;
    this.reference = stock.reference;
    this.ean13 = stock.ean13;
    this.isbn = stock.isbn;
    this.upc = stock.upc;
    this.mpn = stock.mpn;
    this.physical_quantity = stock.physical_quantity;
    this.usable_quantity = stock.usable_quantity;
    this.price_te = Number(stock.price_te);
  }

  async warehouse() {
    return await Warehouse.findById(this.id_warehouse);
  }

  async product() {
    return await Product.findById(this.id_product);
  }

  async productAttribute() {
    return await ProductOption.findById(this.id_product_attribute);
  }
}
