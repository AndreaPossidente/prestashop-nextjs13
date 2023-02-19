import Model from "./Model";
import Shop from "./Shop";
import Country from "./Country";
import Currency from "./Currency";
import Group from "./Group";

export default class SpecificPriceRule extends Model {
  static ENDPOINT = "specific_price_rules";

  id: number;
  id_shop: number;
  id_country: number;
  id_currency: number;
  id_group: number;
  name: string;
  from_quantity: number;
  price: number;
  reduction: number;
  reduction_tax: boolean;
  reduction_type: string;
  from: Date;
  to: Date;

  constructor(specificPriceRule: SpecificPriceRuleSchema) {
    super();
    this.id = specificPriceRule.id;
    this.id_shop = specificPriceRule.id_shop;
    this.id_country = specificPriceRule.id_country;
    this.id_currency = specificPriceRule.id_currency;
    this.id_group = specificPriceRule.id_group;
    this.name = specificPriceRule.name;
    this.from_quantity = specificPriceRule.from_quantity;
    this.price = Number(specificPriceRule.price);
    this.reduction = Number(specificPriceRule.reduction);
    this.reduction_tax = specificPriceRule.reduction_tax == 1 ? true : false;
    this.reduction_type = specificPriceRule.reduction_type;
    this.from = new Date(specificPriceRule.from);
    this.to = new Date(specificPriceRule.to);
  }

  async shop() {
    return await Shop.findById(this.id_shop);
  }

  async country() {
    return await Country.findById(this.id_country);
  }

  async currency() {
    return await Currency.findById(this.id_country);
  }

  async group() {
    return await Group.findById(this.id_group);
  }
}
