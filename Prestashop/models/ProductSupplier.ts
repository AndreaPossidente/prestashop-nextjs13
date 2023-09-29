import Currency from "./Currency";
import Model from "./Model";
import Product from "./Product";
import Supplier from "./Supplier";
import ProductOption from "./ProductOption";

export default class ProductSupplier extends Model {
  static ENDPOINT = "product_suppliers";

  id: number;
  id_product: number;
  id_product_attribute: number;
  id_supplier: number;
  id_currency: number;
  product_supplier_reference: string;
  product_supplier_price_te: number;

  constructor(productSupplier: ProductSupplierSchema) {
    super();
    this.id = productSupplier.id;
    this.id_product = productSupplier.id_product;
    this.id_product_attribute = productSupplier.id_product_attribute;
    this.id_supplier = productSupplier.id_supplier;
    this.id_currency = productSupplier.id_currency;
    this.product_supplier_reference =
      productSupplier.product_supplier_reference;
    this.product_supplier_price_te = Number(
      productSupplier.product_supplier_price_te
    );
  }

  async product() {
    return await Product.findById(this.id_product);
  }

  async productAttribute() {
    return await ProductOption.findById(this.id_product_attribute);
  }

  async supplier() {
    return await Supplier.findById(this.id_supplier);
  }

  async currency() {
    return await Currency.findById(this.id_currency);
  }
}
