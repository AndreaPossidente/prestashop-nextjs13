import Model from "./Model";
import Product from "./Product";
import Shop from "./Shop";
import ShopGroup from "./ShopGroup";

export default class StockAvailable extends Model {
  static ENDPOINT = "stock_availables";

  constructor(stockAvailable) {
    super();
    this.id = stockAvailable.id;
    this.id_product = stockAvailable.id_product;
    this.id_product_attribute = stockAvailable.id_product_attribute;
    this.id_shop = stockAvailable.id_shop;
    this.id_shop_group = stockAvailable.id_shop_group;
    this.quantity = stockAvailable.quantity;
    this.depends_on_stock = stockAvailable.depends_on_stock;
    this.out_of_stock = stockAvailable.out_of_stock;
    this.location = stockAvailable.location;
  }

  async product() {
    return await Product.findById(this.id_product);
  }

  async productAttribute() {
    return await ProductAttribute.findById(this.id_product_attribute);
  }

  async shop() {
    return await Shop.findById(this.id_shop);
  }

  async shopGroup() {
    return await ShopGroup.findById(this.id_shop_group);
  }

  //   id_product	isUnsignedId	✔️		Product ID
  //   id_product_attribute	isUnsignedId	✔️		Product attribute ID
  //   id_shop	isUnsignedId	❌		Shop ID
  //   id_shop_group	isUnsignedId	❌		Shop group ID
  //   quantity	isInt	✔️	10
  //   depends_on_stock	isBool	✔️
  //   out_of_stock	isInt	✔️
  //   location	isString	❌	255

  // add non static CRUD
}
