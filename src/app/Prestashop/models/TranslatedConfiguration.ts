import Model from "./Model";
import Shop from "./Shop";
import ShopGroup from "./ShopGroup";

export default class TranslatedConfiguration extends Model {
  static ENDPOINT = "translated_configurations";

  id: number;
  value: string;
  date_add: Date;
  date_upd: null | Date;
  name: string;
  id_shop_group: number;
  id_shop: number;

  constructor(translatedConfigurations: TranslatedConfigurationSchema) {
    super();
    this.id = translatedConfigurations.id;
    this.id_shop_group = Number(translatedConfigurations.id_shop_group);
    this.id_shop = Number(translatedConfigurations.id_shop);
    this.value = translatedConfigurations.value;
    this.name = translatedConfigurations.name;
    this.date_add = new Date(translatedConfigurations.date_add);
    this.date_upd = translatedConfigurations.date_upd
      ? new Date(translatedConfigurations.date_upd)
      : null;
  }

  async shopGroup() {
    return await ShopGroup.findById(this.id_shop_group);
  }
  async shop() {
    return await Shop.findById(this.id_shop);
  }
}
