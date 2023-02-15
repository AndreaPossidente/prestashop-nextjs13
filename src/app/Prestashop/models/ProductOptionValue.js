import Group from "./Group";
import Model from "./Model";

export default class ProductOptionValue extends Model {
  static ENDPOINT = "product_option_values";

  constructor(productOptionValue) {
    super();
    this.id = productOptionValue.id;
    this.id_attribute_group = productOptionValue.id_attribute_group;
    this.color = productOptionValue.color;
    this.position = productOptionValue.position;
    this.name = productOptionValue.name;
  }

  async attributeGroup() {
    return await Group.findById(this.id_attribute_group);
  }

  //   id_attribute_group	isUnsignedId	✔️
  //   color	isColor	❌
  //   position	isInt	❌
  //   name	isGenericName	✔️	128

  // add non static CRUD
}
