import Model from "./Model";

export default class ImageType extends Model {
  static ENDPOINT = "image_types";

  id: number;
  name: string;
  width: number;
  height: number;
  categories: boolean;
  products: boolean;
  manufacturers: boolean;
  suppliers: boolean;
  stores: boolean;

  constructor(imageType: ImageTypeSchema) {
    super();
    this.id = imageType.id;
    this.name = imageType.name;
    this.width = imageType.width;
    this.height = imageType.height;
    this.categories = imageType.categories == 1 ? true : false;
    this.products = imageType.products == 1 ? true : false;
    this.manufacturers = imageType.manufacturers == 1 ? true : false;
    this.suppliers = imageType.suppliers == 1 ? true : false;
    this.stores = imageType.stores == 1 ? true : false;
  }
}
