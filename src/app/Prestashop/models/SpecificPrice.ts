import Model from "./Model";
import Country from "./Country";
import Currency from "./Currency";
import Customer from "./Customer";
import Group from "./Group";
import Product from "./Product";
import Shop from "./Shop";
import ShopGroup from "./ShopGroup";
import SpecificPriceRule from "./SpecificPriceRule";
import Cart from "./Cart";
import ProductOption from "./ProductOption";

export default class SpecificPrice extends Model {
  static ENDPOINT = "specific_prices";

  id: number;
  id_shop_group: number;
  id_shop: number;
  id_cart: number;
  id_product: number;
  id_product_attribute: number;
  id_currency: number;
  id_country: number;
  id_group: number;
  id_customer: number;
  id_specific_price_rule: number;
  price: number;
  from_quantity: number;
  reduction: number;
  reduction_tax: boolean;
  reduction_type: string;
  from: Date;
  to: Date;

  constructor(specificPrice: SpecificPriceSchema) {
    super();
    this.id = specificPrice.id;
    this.id_shop_group = specificPrice.id_shop_group;
    this.id_shop = specificPrice.id_shop;
    this.id_cart = specificPrice.id_cart;
    this.id_product = specificPrice.id_product;
    this.id_product_attribute = specificPrice.id_product_attribute;
    this.id_currency = specificPrice.id_currency;
    this.id_country = specificPrice.id_country;
    this.id_group = specificPrice.id_group;
    this.id_customer = specificPrice.id_customer;
    this.id_specific_price_rule = specificPrice.id_specific_price_rule;
    this.price = Number(specificPrice.price);
    this.from_quantity = specificPrice.from_quantity;
    this.reduction = Number(specificPrice.reduction);
    this.reduction_tax = specificPrice.reduction_tax == 1 ? true : false;
    this.reduction_type = specificPrice.reduction_type;
    this.from = new Date(specificPrice.from);
    this.to = new Date(specificPrice.to);
  }

  async shopGroup() {
    return await ShopGroup.findById(this.id_shop_group);
  }

  async shop() {
    return await Shop.findById(this.id_shop);
  }

  async cart() {
    return await Cart.findById(this.id_cart);
  }

  async product() {
    return await Product.findById(this.id_product);
  }

  async productAttribute() {
    return await ProductOption.findById(this.id_product_attribute);
  }

  async currency() {
    return await Currency.findById(this.id_currency);
  }

  async country() {
    return await Country.findById(this.id_country);
  }

  async group() {
    return await Group.findById(this.id_group);
  }

  async customer() {
    return await Customer.findById(this.id_customer);
  }

  async specificPriceRule() {
    return await SpecificPriceRule.findById(this.id_specific_price_rule);
  }
}
