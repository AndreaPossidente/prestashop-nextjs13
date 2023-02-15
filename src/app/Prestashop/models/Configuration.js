import Model from "./Model";

export default class Configuration extends Model {
  static ENDPOINT = "configurations";
  static MODEL_NAME = "configuration";

  constructor(configuration) {
    super();
    this.id = configuration.id;
    this.value = configuration.value;
    this.name = configuration.name;
    this.id_shop_group = configuration.id_shop_group;
    this.id_shop = configuration.id_shop;
    this.date_add = configuration.date_add;
    this.date_upd = configuration.date_upd;
  }

  async shopGroup() {
    return await ShopGroup.findById(this.id_shop_group);
  }

  async shop() {
    return await Shop.findById(this.id_shop);
  }

  // value		❌
  // name	isConfigName	✔️	254
  // id_shop_group	isUnsignedId	❌		Shop group ID
  // id_shop	isUnsignedId	❌		Shop ID
  // date_add	isDate	❌
  // date_upd	isDate	❌

  // add non static CRUD
}
