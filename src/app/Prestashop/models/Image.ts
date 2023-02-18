import Model from "./Model";
export default class Image extends Model {
  static ENDPOINT = "images";

  constructor(image: ImageInterface) {
    super();
  }

  static products(productId: number, linkRewrite: string, type: string) {
    let uri = `${this.PS_URI}/${productId}-${type}/${linkRewrite}.jpg`;
    return uri;
  }

  // do it later
}
