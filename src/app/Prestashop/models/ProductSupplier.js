import Combination from "./Combination";
import Currency from "./Currency";
import Model from "./Model";

export default class ProductSupplier extends Model {
  static ENDPOINT = "product_suppliers";

  constructor(productSupplier) {
    super();
    this.id = productSupplier.id;
    this.id_product = productSupplier.id_product;
    this.id_product_attribute = productSupplier.id_product_attribute;
    this.id_supplier = productSupplier.id_supplier;
    this.id_currency = productSupplier.id_currency;
    this.product_supplier_reference =
      productSupplier.product_supplier_reference;
    this.product_supplier_price_te = productSupplier.product_supplier_price_te;
  }

  async product() {
    return await Product.findById(this.id_product);
  }

  async combination() {
    return await Combination.findById(this.id_product_attribute);
  }

  async supplier() {
    return await Supplier.findById(this.id_supplier);
  }

  async currency() {
    return await Currency.findById(this.id_currency);
  }

  //   id_product	isUnsignedId	✔️		Product ID
  //   id_product_attribute	isUnsignedId	✔️		Product attribute ID
  //   id_supplier	isUnsignedId	✔️		Supplier ID
  //   id_currency	isUnsignedId	❌		Currency ID
  //   product_supplier_reference	isReference	❌	64
  //   product_supplier_price_te	isPrice	❌

  // add non static CRUD
}
