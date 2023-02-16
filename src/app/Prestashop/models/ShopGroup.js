import Model from "./Model";

export default class ShopGroup extends Model {
  static ENDPOINT = "shop_groups";

  constructor(shopGroup) {
    super();
    this.id = shopGroup.id;
    this.name = shopGroup.name;
    this.share_customer = shopGroup.share_customer;
    this.share_order = shopGroup.share_order;
    this.share_stock = shopGroup.share_stock;
    this.active = shopGroup.active;
    this.deleted = shopGroup.deleted;
  }

  //   name	isGenericName	✔️	64
  //   color	isColor	❌
  //   share_customer	isBool	❌
  //   share_order	isBool	❌
  //   share_stock	isBool	❌
  //   active	isBool	❌
  //   deleted	isBool	❌

  // add non static CRUD
}
