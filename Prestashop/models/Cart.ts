import Address from "./Address";
import Carrier from "./Carrier";
import Currency from "./Currency";
import Customer from "./Customer";
import Guest from "./Guest";
import Language from "./Language";
import Model from "./Model";
import Shop from "./Shop";
import ShopGroup from "./ShopGroup";

export default class Cart extends Model {
  static ENDPOINT = "carts";

  id: number;
  /** Delivery address ID */
  id_address_delivery: number;
  /** Invoice address ID */
  id_address_invoice: number;
  /** Currency ID */
  id_currency: number;
  /** Customer ID */
  id_customer: number;
  /** Guest ID */
  id_guest: number;
  /** Lang ID */
  id_lang: number;
  /** Shop group ID */
  id_shop_group: number;
  /** Shop ID */
  id_shop: number;
  /** Carrier ID */
  id_carrier: number;
  recyclable: boolean;
  gift: boolean;
  gift_message: string;
  mobile_theme: boolean;
  delivery_option: string;
  secure_key: string;
  allow_seperated_package: boolean;
  date_add: Date;
  date_upd: Date;
  associations: AssociationSchema;
  constructor(cart: CartSchema) {
    super();
    this.id = Number(cart.id);
    this.id_address_delivery = Number(cart.id_address_delivery);
    this.id_address_invoice = Number(cart.id_address_invoice);
    this.id_currency = Number(cart.id_currency);
    this.id_customer = Number(cart.id_customer);
    this.id_guest = Number(cart.id_guest);
    this.id_lang = Number(cart.id_lang);
    this.id_shop_group = Number(cart.id_shop_group);
    this.id_shop = Number(cart.id_shop);
    this.id_carrier = Number(cart.id_carrier);
    this.recyclable = cart.recyclable == 1 ? true : false;
    this.gift = cart.gift == 1 ? true : false;
    this.gift_message = cart.gift_message;
    this.mobile_theme = cart.mobile_theme == 1 ? true : false;
    this.delivery_option = cart.delivery_option;
    this.secure_key = cart.secure_key;
    this.allow_seperated_package =
      cart.allow_seperated_package == 1 ? true : false;
    this.date_add = new Date(cart.date_add);
    this.date_upd = new Date(cart.date_upd);
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
    return await Language.findById(this.id_lang);
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
}
