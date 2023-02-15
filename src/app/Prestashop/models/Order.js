import Model from "./Model";
import Address from "./Address";
import Carrier from "./Carrier";
import Cart from "./Cart";
import Currency from "./Currency";
import Customer from "./Customer";
import Language from "./Language";

export default class Order extends Model {
  static ENDPOINT = "orders";

  constructor(order) {
    super();
    this.id = order.id;
    this.id_address_delivery = order.id_address_delivery;
    this.id_address_invoice = order.id_address_invoice;
    this.id_cart = order.id_cart;
    this.id_currency = order.id_currency;
    this.id_lang = order.id_lang;
    this.id_customer = order.id_customer;
    this.id_carrier = order.id_carrier;
    this.current_state = order.current_state;
    this.module = order.module;
    this.invoice_number = order.invoice_number;
    this.invoice_date = order.invoice_date;
    this.delivery_number = order.delivery_number;
    this.delivery_date = order.delivery_date;
    this.valid = order.valid;
    this.date_add = order.date_add;
    this.date_upd = order.date_upd;
    this.shipping_number = order.shipping_number;
    this.note = order.note;
    this.id_shop_group = order.id_shop_group;
    this.id_shop = order.id_shop;
    this.secure_key = order.secure_key;
    this.payment = order.payment;
    this.recyclable = order.recyclable;
    this.gift = order.gift;
    this.gift_message = order.gift_message;
    this.mobile_theme = order.mobile_theme;
    this.total_discounts = order.total_discounts;
    this.total_discounts_tax_incl = order.total_discounts_tax_incl;
    this.total_discounts_tax_excl = order.total_discounts_tax_excl;
    this.total_paid = order.total_paid;
    this.total_paid_tax_incl = order.total_paid_tax_incl;
    this.total_paid_tax_exl = order.total_paid_tax_exl;
    this.total_paid_real = order.total_paid_real;
    this.total_products = order.total_products;
    this.total_products_wt = order.total_products_wt;
    this.total_shipping = order.total_shipping;
    this.total_shipping_tax_incl = order.total_shipping_tax_incl;
    this.total_shipping_tax_excl = order.total_shipping_tax_excl;
    this.carrier_tax_rate = order.carrier_tax_rate;
    this.total_wrapping = order.total_wrapping;
    this.total_wrapping_tax_incl = order.total_wrapping_tax_incl;
    this.total_wrapping_tax_excl = order.total_wrapping_tax_excl;
    this.round_mode = order.round_mode;
    this.round_type = order.round_type;
    this.conversion_rate = order.conversion_rate;
    this.reference = order.reference;
    this.associations = order.associations;
  }

  async addressDelivery() {
    return await Address.findById(this.id_address_delivery);
  }

  async addressInvoice() {
    return await Address.findById(this.id_address_invoice);
  }

  async cart() {
    return await Cart.findById(this.id_cart);
  }

  async currency() {
    return await Currency.findById(this.id_currency);
  }

  async lang() {
    return await Language.findById(this.id_lang);
  }

  async customer() {
    return await Customer.findById(this.id_customer);
  }

  async carrier() {
    return await Carrier.findById(this.id_carrier);
  }

  async shopGroup() {
    return await ShopGroup.findById(this.id_shop_group);
  }

  async shop() {
    return await Shop.findById(this.id_shop);
  }

  //   id_address_delivery	isUnsignedId	✔️		Delivery address ID
  //   id_address_invoice	isUnsignedId	✔️		Invoice address ID
  //   id_cart	isUnsignedId	✔️		Cart ID
  //   id_currency	isUnsignedId	✔️		Currency ID
  //   id_lang	isUnsignedId	✔️		Lang ID
  //   id_customer	isUnsignedId	✔️		Customer ID
  //   id_carrier	isUnsignedId	✔️		Carrier ID
  //   current_state	isUnsignedId	❌
  //   module	isModuleName	✔️
  //   invoice_number		❌
  //   invoice_date		❌
  //   delivery_number		❌
  //   delivery_date		❌
  //   valid		❌
  //   date_add	isDate	❌
  //   date_upd	isDate	❌
  //   shipping_number	isTrackingNumber	❌	true
  //   note	isCleanHtml	❌
  //   id_shop_group	isUnsignedId	❌		Shop group ID
  //   id_shop	isUnsignedId	❌		Shop ID
  //   secure_key	isMd5	❌
  //   payment	isGenericName	✔️
  //   recyclable	isBool	❌
  //   gift	isBool	❌
  //   gift_message	isMessage	❌
  //   mobile_theme	isBool	❌
  //   total_discounts	isPrice	❌
  //   total_discounts_tax_incl	isPrice	❌
  //   total_discounts_tax_excl	isPrice	❌
  //   total_paid	isPrice	✔️
  //   total_paid_tax_incl	isPrice	❌
  //   total_paid_tax_excl	isPrice	❌
  //   total_paid_real	isPrice	✔️
  //   total_products	isPrice	✔️
  //   total_products_wt	isPrice	✔️
  //   total_shipping	isPrice	❌
  //   total_shipping_tax_incl	isPrice	❌
  //   total_shipping_tax_excl	isPrice	❌
  //   carrier_tax_rate	isFloat	❌
  //   total_wrapping	isPrice	❌
  //   total_wrapping_tax_incl	isPrice	❌
  //   total_wrapping_tax_excl	isPrice	❌
  //   round_mode	isUnsignedId	❌
  //   round_type	isUnsignedId	❌
  //   conversion_rate	isFloat	✔️
  //   reference		❌
  //   associations		❌

  // add non static CRUD
}
