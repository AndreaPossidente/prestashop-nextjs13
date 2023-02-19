import Model from "./Model";

export default class ShopGroup extends Model {
  static ENDPOINT = "shop_groups";

  id: number;
  name: string;
  color: string;
  share_customer: boolean;
  share_order: boolean;
  share_stock: boolean;
  active: boolean;
  deleted: boolean;

  constructor(shopGroup: ShopGroupSchema) {
    super();
    this.id = shopGroup.id;
    this.name = shopGroup.name;
    this.color = shopGroup.color;
    this.share_customer = shopGroup.share_customer == 1 ? true : false;
    this.share_order = shopGroup.share_order == 1 ? true : false;
    this.share_stock = shopGroup.share_stock == 1 ? true : false;
    this.active = shopGroup.active == 1 ? true : false;
    this.deleted = shopGroup.deleted == 1 ? true : false;
  }
}
