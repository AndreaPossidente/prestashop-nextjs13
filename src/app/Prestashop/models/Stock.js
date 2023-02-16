import Model from "./Model";
import Product from "./Product";

export default class Stock extends Model {
  static ENDPOINT = "stocks";

  constructor(stock) {
    super();
    this.id = stock.id;
    this.id_warehouse = stock.id_warehouse;
    this.id_product = stock.id_product;
    this.id_product_attribute = stock.id_product_attribute;
    this.real_quantity = stock.real_quantity;
    this.reference = stock.reference;
    this.ean13 = stock.ean13;
    this.isbn = stock.isbn;
    this.upc = stock.upc;
    this.mpn = stock.mpn;
    this.physical_quantity = stock.physical_quantity;
    this.usable_quantity = stock.usable_quantity;
    this.price_te = stock.price_te;
  }

  async warehouse() {
    return await Warehouse.findById(this.id_warehouse);
  }

  async product() {
    return await Product.findById(this.id_product);
  }

  async productAttribute() {
    return await ProductAttribute.findById(this.id_product_attribute);
  }

  //   id_warehouse	isUnsignedId	✔️	✔️		Warehouse ID
  //   id_product	isUnsignedId	✔️	✔️		Product ID
  //   id_product_attribute	isUnsignedId	✔️	✔️		Product attribute ID
  //   real_quantity		❌	❌	true
  //   reference	isReference	❌	✔️
  //   ean13	isEan13	❌	✔️
  //   isbn	isIsbn	❌	✔️
  //   upc	isUpc	❌	✔️
  //   mpn	isMpn	❌	✔️
  //   physical_quantity	isUnsignedInt	✔️	✔️
  //   usable_quantity	isInt	✔️	✔️
  //   price_te	isPrice	✔️	✔️

  // add non static CRUD
}
