import Model from "./Model";
import ProductFeature from "./ProductFeature";

export default class ProductFeatureValue extends Model {
  static ENDPOINT = "product_feature_values";
  // per la versione multipla è lo stesso di modelname! correggere

  id: number;
  id_feature: number;
  custom: boolean;
  value: string;

  constructor(productFeatureValue: ProductFeatureValueSchema) {
    super();
    this.id = productFeatureValue.id;
    this.id_feature = productFeatureValue.id_feature;
    this.custom = productFeatureValue.custom == 1 ? true : false;
    this.value = productFeatureValue.value;
  }

  async productFeature() {
    return await ProductFeature.findById(this.id_feature);
  }
}
