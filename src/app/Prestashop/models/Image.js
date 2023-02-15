import Model from "./Model";
export default class Image extends Model {
  static ENDPOINT = "images";

  constructor(image) {
    super();
  }

  static async getBase64ImageFromUrl(url) {
    let response = await fetch(url);
    let contentType = response.headers.get("Content-Type");
    let buffer = Buffer.from(await response.arrayBuffer());
    return "data:" + contentType + ";base64," + buffer.toString("base64");
  }

  static products(productId, linkRewrite, type) {
    let uri = `${this.PS_URI}/${productId}-${type}/${linkRewrite}.jpg`;

    //let imageUrl = await Image.getBase64ImageFromUrl(uri);
    return uri;
  }

  //   general		❌
  //   products		❌
  //   categories		❌
  //   manufacturers		❌
  //   suppliers		❌
  //   stores		❌
  //   customizations		❌

  // add non static CRUD
}
