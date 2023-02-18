import Model from "./Model";
import Shop from "./Shop";
import ShopGroup from "./ShopGroup";

export default class Configuration extends Model {
  static ENDPOINT = "configurations";

  id: number;
  /** Shop group ID */
  id_shop_group: number;
  /** Shop ID */
  id_shop: number;
  name: string;
  value: string;
  date_add: Date;
  date_upd: Date;

  constructor(configuration: ConfigurationInterface) {
    super();
    this.id = configuration.id;
    this.value = configuration.value;
    this.name = configuration.name;
    this.id_shop_group = configuration.id_shop_group;
    this.id_shop = configuration.id_shop;
    this.date_add = new Date(configuration.date_add);
    this.date_upd = new Date(configuration.date_upd);
  }

  async shopGroup() {
    return await ShopGroup.findById(this.id_shop_group);
  }

  async shop() {
    return await Shop.findById(this.id_shop);
  }
}
