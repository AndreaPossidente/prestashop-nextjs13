import Model from "./Model";

export default class ProductFeature extends Model {
  static ENDPOINT = "product_features";

  constructor(productFeature) {
    super();
    this.id = productFeature.id;
    this.position = productFeature.position;
    this.name = productFeature.name;
  }

  //   position	isInt	❌
  //   name	isGenericName	✔️	128

  // add non static CRUD
}
