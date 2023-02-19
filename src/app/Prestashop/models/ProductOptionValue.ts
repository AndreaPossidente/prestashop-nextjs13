import Model from "./Model";
import ProductOption from "./ProductOption";

export default class ProductOptionValue extends Model {
  static ENDPOINT = "product_option_values";

  id: number;
  id_attribute_group: number;
  color: string;
  position: number;
  name: string;

  constructor(productOptionValue: ProductOptionValueSchema) {
    super();
    this.id = productOptionValue.id;
    this.id_attribute_group = productOptionValue.id_attribute_group;
    this.color = productOptionValue.color;
    this.position = productOptionValue.position;
    this.name = productOptionValue.name;
  }

  async attributeGroup() {
    return await ProductOption.findById(this.id_attribute_group);
  }
}
