import Model from "./Model";

export default class Group extends Model {
  static ENDPOINT = "groups";

  constructor(group) {
    super();
    this.id = group.id;
    this.reduction = group.reduction;
    this.show_prices = group.show_prices;
    this.date_add = group.date_add;
    this.date_upd = group.date_upd;
    this.name = group.name;
  }

  //   reduction	isFloat	❌
  //   price_display_method	isPriceDisplayMethod	✔️
  //   show_prices	isBool	❌
  //   date_add	isDate	❌
  //   date_upd	isDate	❌
  //   name	isGenericName	✔️	32

  // add non static CRUD
}
