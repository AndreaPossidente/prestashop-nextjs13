import Category from "./Category";
import Model from "./Model";
import ShopGroup from "./ShopGroup";

export default class Shop extends Model {
  static ENDPOINT = "shops";

  id: number;
  id_shop_group: number;
  id_category: number;
  active: boolean;
  deleted: boolean;
  name: string;
  color: string;
  theme_name: string;

  constructor(shop: ShopSchema) {
    super();
    this.id = shop.id;
    this.id_shop_group = shop.id_shop_group;
    this.id_category = shop.id_category;
    this.active = shop.active == 1 ? true : false;
    this.deleted = shop.deleted == 1 ? true : false;
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
}
