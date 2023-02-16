import Model from "./Model";
import Country from "./Country";
import Currency from "./Currency";
import Customer from "./Customer";
import Group from "./Group";
import Product from "./Product";
import Shop from "./Shop";
import ShopGroup from "./ShopGroup";
import SpecificPriceRule from "./SpecificPriceRule";

export default class SpecificPrice extends Model {
  static ENDPOINT = "specific_prices";

  constructor(specificPrice) {
    super();
    this.id = specificPrice.id;
    this.id_shop_group = specificPrice.id_shop_group;
    this.id_shop = specificPrice.id_shop;
    this.id_product = specificPrice.id_product;
    this.id_product_attribute = specificPrice.id_product_attribute;
    this.id_currency = specificPrice.id_currency;
    this.id_country = specificPrice.id_country;
    this.id_group = specificPrice.id_group;
    this.id_customer = specificPrice.id_customer;
    this.id_specific_price_rule = specificPrice.id_specific_price_rule;
    this.price = specificPrice.price;
    this.from_quantity = specificPrice.from_quantity;
    this.reduction = specificPrice.reduction;
    this.reduction_tax = specificPrice.reduction_tax;
    this.reduction_type = specificPrice.reduction_type;
    this.from = specificPrice.from;
    this.to = specificPrice.to;
  }

  async shopGroup() {
    return await ShopGroup.findById(this.id_shop_group);
  }

  async shop() {
    return await Shop.findById(this.id_shop);
  }

  async product() {
    return await Product.findById(this.id_product);
  }

  async productAttribute() {
    return await ProductAttribute.findById(this.id_product_attribute);
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

  //   id_shop_group	isUnsignedId	❌	Shop group ID
  //   id_shop	isUnsignedId	✔️	Shop ID
  //   id_cart	isUnsignedId	✔️	Cart ID
  //   id_product	isUnsignedId	✔️	Product ID
  //   id_product_attribute	isUnsignedId	❌	Product attribute ID
  //   id_currency	isUnsignedId	✔️	Currency ID
  //   id_country	isUnsignedId	✔️	Country ID
  //   id_group	isUnsignedId	✔️
  //   id_customer	isUnsignedId	✔️	Customer ID
  //   id_specific_price_rule	isUnsignedId	❌
  //   price	isNegativePrice	✔️
  //   from_quantity	isUnsignedInt	✔️
  //   reduction	isPrice	✔️
  //   reduction_tax	isBool	✔️
  //   reduction_type	isReductionType	✔️
  //   from	isDateFormat	✔️
  //   to	isDateFormat	✔️

  // add non static CRUD
}
