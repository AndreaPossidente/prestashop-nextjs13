import Model from "./Model";

export default class ProductOption extends Model {
  static ENDPOINT = "product_options";

  id: number;
  is_color_group: boolean;
  position: number;
  name: string;
  public_name: string;
  associations: AssociationSchema;

  constructor(productOption: ProductOptionSchema) {
    super();
    this.id = productOption.id;
    this.is_color_group = productOption.is_color_group == 1 ? true : false;
    this.position = productOption.position;
    this.name = productOption.name;
    this.public_name = productOption.public_name;
    this.associations = productOption.associations;
  }
}
