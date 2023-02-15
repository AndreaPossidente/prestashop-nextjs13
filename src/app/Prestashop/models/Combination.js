import Model from "./Model";

export default class Combination extends Model {
  static ENDPOINT = "combinations";
  static MODEL_NAME = "combination";

  constructor(combination) {
    super();
    this.id = combination.id;
    this.id_product = combination.id_product;
    this.location = combination.location;
    this.ean13 = combination.ean13;
    this.isbn = combination.isbn;
    this.upc = combination.upc;
    this.mpn = combination.mpn;
    this.quantity = combination.quantity;
    this.reference = combination.reference;
    this.supplier_reference = combination.supplier_reference;
    this.wholesale_price = combination.wholesale_price;
    this.price = combination.price;
    this.ecotax = combination.ecotax;
    this.weight = combination.weight;
    this.unit_price_impact = combination.unit_price_impact;
    this.minimal_quantity = combination.minimal_quantity;
    this.low_stock_threshold = combination.low_stock_threshold;
    this.low_stock_alert = combination.low_stock_alert;
    this.default_on = combination.default_on;
    this.available_date = combination.available_date;
    this.associations = combination.associations;
  }

  /**
   * Returns the combination product
   */
  async product() {
    return await Product.findById(this.pro);
  }

  // id_product	isUnsignedId	✔️		Product ID
  // location	isString	❌	255
  // ean13	isEan13	❌	13
  // isbn	isIsbn	❌	32
  // upc	isUpc	❌	12
  // mpn	isMpn	❌	40
  // quantity	isInt	❌	10
  // reference		❌	64
  // supplier_reference		❌	64
  // wholesale_price	isNegativePrice	❌	27
  // price	isNegativePrice	❌	20
  // ecotax	isPrice	❌	20
  // weight	isFloat	❌
  // unit_price_impact	isNegativePrice	❌	20
  // minimal_quantity	isUnsignedId	✔️
  // low_stock_threshold	isInt	❌
  // low_stock_alert	isBool	❌
  // default_on	isBool	❌
  // available_date	isDateFormat	❌
  // associations		❌

  // add non static CRUD
}
