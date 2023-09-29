import Model from "./Model";
import Product from "./Product";

export default class Combination extends Model {
  static ENDPOINT = "combinations";

  id: number;
  /** Product ID */
  id_product: number;
  location: string;
  ean13: string;
  isbn: string;
  upc: string;
  mpn: string;
  quantity: number;
  reference: string;
  supplier_reference: string;
  wholesale_price: number;
  price: number;
  ecotax: number;
  weight: number;
  unit_price_impact: number;
  minimal_quantity: number;
  low_stock_threshold: number;
  low_stock_alert: boolean;
  default_on: boolean;
  available_date: Date;
  associations: AssociationSchema;

  constructor(combination: CombinationSchema) {
    super();
    this.id = combination.id;
    this.id_product = combination.id_product;
    this.location = combination.location;
    this.ean13 = combination.ean13;
    this.isbn = combination.isbn;
    this.upc = combination.upc;
    this.mpn = combination.mpn;
    this.quantity = Number(combination.quantity);
    this.reference = combination.reference;
    this.supplier_reference = combination.supplier_reference;
    this.wholesale_price = Number(combination.wholesale_price);
    this.price = Number(combination.price);
    this.ecotax = Number(combination.ecotax);
    this.weight = Number(combination.weight);
    this.unit_price_impact = Number(combination.unit_price_impact);
    this.minimal_quantity = combination.minimal_quantity;
    this.low_stock_threshold = combination.low_stock_threshold;
    this.low_stock_alert = combination.low_stock_alert == 1 ? true : false;
    this.default_on = combination.default_on == 1 ? true : false;
    this.available_date = new Date(combination.available_date);
    this.associations = combination.associations;
  }

  /**
   * Returns the combination product
   */
  async product() {
    return await Product.findById(this.id_product);
  }
}
