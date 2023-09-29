import Model from "./Model";
import Shop from "./Shop";

export default class ShopUrl extends Model {
  static ENDPOINT = "shop_urls";

  id: number;
  id_shop: number;
  active: boolean;
  main: boolean;
  domain: string;
  domain_ssl: string;
  physical_uri: string;
  virtual_uri: string;

  constructor(shopUrl: ShopUrlSchema) {
    super();
    this.id = shopUrl.id;
    this.id_shop = shopUrl.id_shop;
    this.active = shopUrl.active == 1 ? true : false;
    this.main = shopUrl.main == 1 ? true : false;
    this.domain = shopUrl.domain;
    this.domain_ssl = shopUrl.domain_ssl;
    this.physical_uri = shopUrl.physical_uri;
    this.virtual_uri = shopUrl.virtual_uri;
  }

  async shop() {
    return await Shop.findById(this.id_shop);
  }
}
