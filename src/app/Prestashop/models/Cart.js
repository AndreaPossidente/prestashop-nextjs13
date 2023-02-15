import Address from "./Address";
import Carrier from "./Carrier";
import Currency from "./Currency";
import Customer from "./Customer";
import Model from "./Model";

export default class Cart extends Model {
  static ENDPOINT = "carts";
  static MODEL_NAME = "cart";

  constructor(cart) {
    super();
    this.id = cart.id;
    this.id_address_delivery = cart.id_address_delivery;
    this.id_address_invoice = cart.id_address_invoice;
    this.id_currency = cart.id_currency;
    this.id_customer = cart.id_customer;
    this.id_guest = cart.id_guest;
    this.id_lang = cart.id_lang;
    this.id_shop_group = cart.id_shop_group;
    this.id_shop = cart.id_shop;
    this.id_carrier = cart.id_carrier;
    this.recyclable = cart.recyclable;
    this.gift = cart.gift;
    this.gift_message = cart.gift_message;
    this.mobile_theme = cart.mobile_theme;
    this.delivery_option = cart.delivery_option;
    this.secure_key = cart.secure_key;
    this.allow_seperated_package = cart.allow_seperated_package;
    this.date_add = cart.date_add;
    this.date_upd = cart.date_upd;
    this.associations = cart.associations;
  }

  async addressDelivery() {
    return await Address.findById(this.id_address_delivery);
  }

  async addressInvoice() {
    return await Address.findById(this.id_address_invoice);
  }

  async currency() {
    return await Currency.findById(this.id_currency);
  }

  async customer() {
    return await Customer.findById(this.id_customer);
  }

  async guest() {
    return await Guest.findById(this.id_guest);
  }

  async lang() {
    return await Lang.findById(this.id_lang);
  }

  async shopGroup() {
    return await ShopGroup.findById(this.id_shop_group);
  }

  async shop() {
    return await Shop.findById(this.id_shop);
  }

  async carrier() {
    return await Carrier.findById(this.id_carrier);
  }

  //   id_address_delivery	isUnsignedId	❌		Delivery address ID
  //   id_address_invoice	isUnsignedId	❌		Invoice address ID
  //   id_currency	isUnsignedId	✔️		Currency ID
  //   id_customer	isUnsignedId	❌		Customer ID
  //   id_guest	isUnsignedId	❌		Guest ID
  //   id_lang	isUnsignedId	✔️		Lang ID
  //   id_shop_group	isUnsignedId	❌		Shop group ID
  //   id_shop	isUnsignedId	❌		Shop ID
  //   id_carrier	isUnsignedId	❌		Carrier ID
  //   recyclable	isBool	❌
  //   gift	isBool	❌
  //   gift_message	isMessage	❌
  //   mobile_theme	isBool	❌
  //   delivery_option		❌
  //   secure_key		❌	32
  //   allow_seperated_package	isBool	❌
  //   date_add	isDate	❌
  //   date_upd	isDate	❌
  //   associations		❌

  // add non static CRUD
}
