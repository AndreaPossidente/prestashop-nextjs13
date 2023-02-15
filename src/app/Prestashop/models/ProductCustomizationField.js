import Model from "./Model";

export default class ProductCustomizationField extends Model {
  static ENDPOINT = "product_customization_fields";
  static MODEL_NAME = "customization_fields";
  // per la versione multipla è lo stesso di modelname! correggere

  constructor(customizationField) {
    super();
    this.id = customizationField.id;
    this.id_product = customizationField.id_product;
    this.type = customizationField.type;
    this.required = customizationField.required;
    this.is_module = customizationField.is_module;
    this.is_deleted = customizationField.is_deleted;
    this.name = customizationField.name;
  }

  async product() {
    return await Product.findById(this.id_product);
  }

  //   id_product	isUnsignedId	✔️		Product ID
  //   type	isUnsignedId	✔️
  //   required	isBool	✔️
  //   is_module	isBool	❌
  //   is_deleted	isBool	❌
  //   name		✔️	255

  // add non static CRUD
}
