import Model from "./Model";

export default class Group extends Model {
  static ENDPOINT = "groups";

  id: number;
  reduction: number;
  price_display_method: number;
  show_prices: boolean;
  date_add: Date;
  date_upd: Date;
  name: string;

  constructor(group: GroupInterface) {
    super();
    this.id = group.id;
    this.reduction = Number(group.reduction);
    this.price_display_method = group.price_display_method;
    this.show_prices = group.show_prices == 1 ? true : false;
    this.date_add = new Date(group.date_add);
    this.date_upd = new Date(group.date_upd);
    this.name = group.name;
  }
}
