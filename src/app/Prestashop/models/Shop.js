import Category from "./Category";
import Model from "./Model";
import ShopGroup from "./ShopGroup";

export default class Shop extends Model {
  static ENDPOINT = "shops";

  constructor(shop) {
    super();
    this.id = shop.id;
    this.id_shop_group = shop.id_shop_group;
    this.id_category = shop.id_category;
    this.active = shop.active;
    this.deleted = shop.deleted;
    this.name = shop.name;
    this.color = shop.color;
    this.theme_name = shop.theme_name;
  }

  async shopGroup() {
    return await ShopGroup.findById(this.id_shop_group);
  }

  async category() {
    return await Category.findById(this.id_category);
  }

  //   id_shop_group		✔️		Shop group ID
  //   id_category		✔️
  //   active	isBool	❌
  //   deleted	isBool	❌
  //   name	isGenericName	✔️	64
  //   color	isColor	❌
  //   theme_name	isThemeName	❌

  // add non static CRUD
}
