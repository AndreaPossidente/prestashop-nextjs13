import Model from "./Model";

export default class ProductFeature extends Model {
  static ENDPOINT = "product_features";

  id: number;
  position: number;
  name: string;

  constructor(productFeature: ProductFeature) {
    super();
    this.id = productFeature.id;
    this.position = productFeature.position;
    this.name = productFeature.name;
  }
}
