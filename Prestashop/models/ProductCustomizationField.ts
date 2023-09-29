import Model from "./Model";
import Product from "./Product";

export default class ProductCustomizationField extends Model {
  static ENDPOINT = "product_customization_fields";
  static MODEL_NAME = "customization_fields";

  // per la versione multipla è lo stesso di modelname! correggere

  id: number;
  id_product: number;
  type: number;
  required: boolean;
  is_module: boolean;
  is_deleted: boolean;
  name: string;

  constructor(productCustomizationField: ProductCustomizationFieldSchema) {
    super();
    this.id = productCustomizationField.id;
    this.id_product = productCustomizationField.id_product;
    this.type = productCustomizationField.type;
    this.required = productCustomizationField.required == 1 ? true : false;
    this.is_module = productCustomizationField.is_module == 1 ? true : false;
    this.is_deleted = productCustomizationField.is_deleted == 1 ? true : false;
    this.name = productCustomizationField.name;
  }

  async product() {
    return await Product.findById(this.id_product);
  }
}
