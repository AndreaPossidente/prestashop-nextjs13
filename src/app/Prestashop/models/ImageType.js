import Model from "./Model";

export default class ImageType extends Model {
  static ENDPOINT = "image_types";

  constructor(imageType) {
    super();
    this.id = imageType.id;
    this.name = imageType.name;
    this.width = imageType.width;
    this.height = imageType.height;
    this.categories = imageType.categories;
    this.products = imageType.products;
    this.manufacturers = imageType.manufacturers;
    this.suppliers = imageType.suppliers;
    this.stores = imageType.stores;
  }

  //   name	isImageTypeName	✔️	64
  //   width	isImageSize	✔️
  //   height	isImageSize	✔️
  //   categories	isBool	❌
  //   products	isBool	❌
  //   manufacturers	isBool	❌
  //   suppliers	isBool	❌
  //   stores	isBool	❌

  // add non static CRUD
}
