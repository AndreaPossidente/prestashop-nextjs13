import Model from "./Model";
import Shop from "./Shop";
import Country from "./Country";
import Currency from "./Currency";
import Group from "./Group";

export default class SpecificPriceRule extends Model {
  static ENDPOINT = "specific_price_rules";

  constructor(specificPriceRule) {
    super();
    this.id = specificPriceRule.id;
    this.id_shop = specificPriceRule.id_shop;
    this.id_country = specificPriceRule.id_country;
    this.id_currency = specificPriceRule.id_currency;
    this.id_group = specificPriceRule.id_group;
    this.name = specificPriceRule.name;
    this.from_quantity = specificPriceRule.from_quantity;
    this.price = specificPriceRule.price;
    this.reduction = specificPriceRule.reduction;
    this.reduction_tax = specificPriceRule.reduction_tax;
    this.reduction_type = specificPriceRule.reduction_type;
    this.from = specificPriceRule.from;
    this.to = specificPriceRule.to;
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

  //   id_shop	isUnsignedId	✔️	Shop ID
  //   id_country	isUnsignedId	✔️	Country ID
  //   id_currency	isUnsignedId	✔️	Currency ID
  //   id_group	isUnsignedId	✔️
  //   name	isCleanHtml	✔️
  //   from_quantity	isUnsignedInt	✔️
  //   price	isNegativePrice	✔️
  //   reduction	isPrice	✔️
  //   reduction_tax	isBool	✔️
  //   reduction_type	isReductionType	✔️
  //   from	isDateFormat	❌
  //   to	isDateFormat	❌

  // add non static CRUD
}
