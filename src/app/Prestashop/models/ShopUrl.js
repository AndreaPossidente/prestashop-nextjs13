import Model from "./Model";

export default class ShopUrl extends Model {
  static ENDPOINT = "shop_urls";

  constructor(shopUrl) {
    super();
    this.id = shopUrl.id;
    this.id_shop = shopUrl.id_shop;
    this.active = shopUrl.active;
    this.main = shopUrl.main;
    this.domain = shopUrl.domain;
    this.domain_ssl = shopUrl.domain_ssl;
    this.physical_uri = shopUrl.physical_uri;
    this.virtual_uri = shopUrl.virtual_uri;
  }

  async shop() {
    return await Shop.findById(this.id_shop);
  }

  //   id_shop		✔️		Shop ID
  //   active	isBool	❌
  //   main	isBool	❌
  //   domain	isCleanHtml	✔️	255
  //   domain_ssl	isCleanHtml	❌	255
  //   physical_uri		❌	64
  //   virtual_uri		❌	64

  // add non static CRUD
}
