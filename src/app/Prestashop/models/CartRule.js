import Customer from "./Customer";
import Model from "./Model";

export default class CartRule extends Model {
  static ENDPOINT = "cart_rules";
  static MODEL_NAME = "cart_rule";

  constructor(cartRule) {
    super();
    this.id = cartRule.id;
    this.id_customer = cartRule.id_customer;
    this.date_from = cartRule.date_from;
    this.date_to = cartRule.date_to;
    this.description = cartRule.description;
    this.quantity = cartRule.quantity;
    this.priority = cartRule.priority;
    this.partial_use = cartRule.partial_use;
    this.code = cartRule.code;
    this.minimum_amount = cartRule.minimum_amount;
    this.minimum_amount_tax = cartRule.minimum_amount_tax;
    this.minimum_amount_currency = cartRule.minimum_amount_currency;
    this.minimum_amount_shipping = cartRule.minimum_amount_shipping;
    this.country_restriction = cartRule.country_restriction;
    this.carrier_restriction = cartRule.carrier_restriction;
    this.group_restriction = cartRule.group_restriction;
    this.cart_rule_restriction = cartRule.cart_rule_restriction;
    this.product_restriction = cartRule.product_restriction;
    this.shop_restriction = cartRule.shop_restriction;
    this.free_shipping = cartRule.free_shipping;
    this.reduction_percent = cartRule.reduction_percent;
    this.reduction_amount = cartRule.reduction_amount;
    this.reduction_tax = cartRule.reduction_tax;
    this.reduction_currency = cartRule.reduction_currency;
    this.reduction_product = cartRule.reduction_product;
    this.reduction_exclude_special = cartRule.reduction_exclude_special;
    this.gift_product = cartRule.gift_product;
    this.gift_product_attribute = cartRule.gift_product_attribute;
    this.highlight = cartRule.highlight;
    this.active = cartRule.active;
    this.date_add = cartRule.date_add;
    this.date_upd = cartRule.date_upd;
    this.name = cartRule.name;
  }

  async customer() {
    return await Customer.findById(this.id_customer);
  }

  // id_customer	isUnsignedId	❌		Customer ID
  // date_from	isDate	✔️
  // date_to	isDate	✔️
  // description	isCleanHtml	❌	65534
  // quantity	isUnsignedInt	❌
  // quantity_per_user	isUnsignedInt	❌
  // priority	isUnsignedInt	❌
  // partial_use	isBool	❌
  // code	isCleanHtml	❌	254
  // minimum_amount	isFloat	❌
  // minimum_amount_tax	isBool	❌
  // minimum_amount_currency	isInt	❌
  // minimum_amount_shipping	isBool	❌
  // country_restriction	isBool	❌
  // carrier_restriction	isBool	❌
  // group_restriction	isBool	❌
  // cart_rule_restriction	isBool	❌
  // product_restriction	isBool	❌
  // shop_restriction	isBool	❌
  // free_shipping	isBool	❌
  // reduction_percent	isPercentage	❌
  // reduction_amount	isFloat	❌
  // reduction_tax	isBool	❌
  // reduction_currency	isUnsignedId	❌
  // reduction_product	isInt	❌
  // reduction_exclude_special	isBool	❌
  // gift_product	isUnsignedId	❌
  // gift_product_attribute	isUnsignedId	❌
  // highlight	isBool	❌
  // active	isBool	❌
  // date_add	isDate	❌
  // date_upd	isDate	❌
  // name	isCleanHtml	✔️	254

  // add non static CRUD
}
