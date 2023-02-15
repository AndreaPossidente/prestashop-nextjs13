import Model from "./Model";

export default class ProductOption extends Model {
  static ENDPOINT = "product_options";

  constructor(productOption) {
    super();
    this.id = productOption.id;
    this.is_color_group = productOption.is_color_group;
    this.position = productOption.position;
    this.name = productOption.name;
    this.public_name = productOption.public_name;
    this.associations = productOption.associations;
  }

  //   is_color_group	isBool	❌
  //   group_type		✔️
  //   position	isInt	❌
  //   name	isGenericName	✔️	128
  //   public_name	isGenericName	✔️	64
  //   associations		❌

  // add non static CRUD
}
