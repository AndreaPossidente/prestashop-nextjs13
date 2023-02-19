import Customer from "./Customer";
import Model from "./Model";

export default class CartRule extends Model {
  static ENDPOINT = "cart_rules";
  static MODEL_NAME = "cart_rule";

  id: number;
  /** Customer ID */
  id_customer: number;
  date_from: Date;
  date_to: Date;
  name: string;
  description: number;
  quantity: number;
  priority: number;
  partial_use: boolean;
  code: number;
  minimum_amount: number;
  minimum_amount_tax: boolean;
  minimum_amount_currency: number;
  minimum_amount_shipping: boolean;
  country_restriction: boolean;
  carrier_restriction: boolean;
  group_restriction: boolean;
  cart_rule_restriction: boolean;
  product_restriction: boolean;
  shop_restriction: boolean;
  free_shipping: boolean;
  reduction_percent: number;
  reduction_amount: number;
  reduction_tax: boolean;
  reduction_currency: number;
  reduction_product: number;
  reduction_exclude_special: boolean;
  gift_product: number;
  gift_product_attribute: number;
  highlight: boolean;
  active: boolean;
  date_add: Date;
  date_upd: Date;

  constructor(cartRule: CartRuleSchema) {
    super();
    this.id = cartRule.id;
    this.id_customer = cartRule.id_customer;
    this.date_from = new Date(cartRule.date_from);
    this.date_to = new Date(cartRule.date_to);
    this.name = cartRule.name;
    this.description = cartRule.description;
    this.quantity = cartRule.quantity;
    this.priority = cartRule.priority;
    this.partial_use = cartRule.partial_use == 1 ? true : false;
    this.code = cartRule.code;
    this.minimum_amount = Number(cartRule.minimum_amount);
    this.minimum_amount_tax = cartRule.minimum_amount_tax == 1 ? true : false;
    this.minimum_amount_currency = cartRule.minimum_amount_currency;
    this.minimum_amount_shipping =
      cartRule.minimum_amount_shipping == 1 ? true : false;
    this.country_restriction = cartRule.country_restriction == 1 ? true : false;
    this.carrier_restriction = cartRule.carrier_restriction == 1 ? true : false;
    this.group_restriction = cartRule.group_restriction == 1 ? true : false;
    this.cart_rule_restriction =
      cartRule.cart_rule_restriction == 1 ? true : false;
    this.product_restriction = cartRule.product_restriction == 1 ? true : false;
    this.shop_restriction = cartRule.shop_restriction == 1 ? true : false;
    this.free_shipping = cartRule.free_shipping == 1 ? true : false;
    this.reduction_percent = Number(cartRule.reduction_percent);
    this.reduction_amount = Number(cartRule.reduction_amount);
    this.reduction_tax = cartRule.reduction_tax == 1 ? true : false;
    this.reduction_currency = cartRule.reduction_currency;
    this.reduction_product = cartRule.reduction_product;
    this.reduction_exclude_special =
      cartRule.reduction_exclude_special == 1 ? true : false;
    this.gift_product = cartRule.gift_product;
    this.gift_product_attribute = cartRule.gift_product_attribute;
    this.highlight = cartRule.highlight == 1 ? true : false;
    this.active = cartRule.active == 1 ? true : false;
    this.date_add = new Date(cartRule.date_add);
    this.date_upd = new Date(cartRule.date_upd);
  }

  async customer() {
    return await Customer.findById(this.id_customer);
  }
}
