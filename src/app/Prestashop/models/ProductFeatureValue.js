import Model from "./Model";

export default class ProductFeatureValue extends Model {
  static ENDPOINT = "product_feature_values";
  // per la versione multipla è lo stesso di modelname! correggere

  constructor(featureValue) {
    super();
    this.id = featureValue.id;
    this.id_feature = featureValue.id_feature;
    this.custom = featureValue.custom;
    this.value = featureValue.value;
  }

  async productFeature() {
    return await ProductFeature.findById(this.id_feature);
  }

  //   id_feature	isUnsignedId	✔️
  //   custom	isBool	❌
  //   value	isGenericName	✔️	255

  // add non static CRUD
}
