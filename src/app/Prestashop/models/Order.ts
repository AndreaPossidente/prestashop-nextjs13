import Model from "./Model";
import Address from "./Address";
import Carrier from "./Carrier";
import Cart from "./Cart";
import Currency from "./Currency";
import Customer from "./Customer";
import Language from "./Language";
import ShopGroup from "./ShopGroup";
import Shop from "./Shop";

export default class Order extends Model {
  static ENDPOINT = "orders";

  id: number;
  id_address_delivery: number;
  id_address_invoice: number;
  id_cart: number;
  id_currency: number;
  id_lang: number;
  id_customer: number;
  id_carrier: number;
  id_shop_group: number;
  id_shop: number;
  current_state: number;
  module: string;
  invoice_number: number;
  invoice_date: Date;
  delivery_number: number;
  delivery_date: Date;
  valid: boolean;
  date_add: Date;
  date_upd: Date;
  shipping_number: string;
  note: string;
  secure_key: string;
  payment: string;
  recyclable: boolean;
  gift: boolean;
  gift_message: string;
  mobile_theme: boolean;
  total_discounts: number;
  total_discounts_tax_incl: number;
  total_discounts_tax_excl: number;
  total_paid: number;
  total_paid_tax_incl: number;
  total_paid_tax_exl: number;
  total_paid_real: number;
  total_products: number;
  total_products_wt: number;
  total_shipping: number;
  total_shipping_tax_incl: number;
  total_shipping_tax_excl: number;
  carrier_tax_rate: number;
  total_wrapping: number;
  total_wrapping_tax_incl: number;
  total_wrapping_tax_excl: number;
  round_mode: number;
  round_type: number;
  conversion_rate: number;
  reference: string;
  associations: Association;

  constructor(order: OrderSchema) {
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
    this.invoice_date = new Date(order.invoice_date);
    this.delivery_number = order.delivery_number;
    this.delivery_date = new Date(order.delivery_date);
    this.valid = order.valid == 1 ? true : false;
    this.date_add = new Date(order.date_add);
    this.date_upd = new Date(order.date_upd);
    this.shipping_number = order.shipping_number;
    this.note = order.note;
    this.id_shop_group = order.id_shop_group;
    this.id_shop = order.id_shop;
    this.secure_key = order.secure_key;
    this.payment = order.payment;
    this.recyclable = order.recyclable == 1 ? true : false;
    this.gift = order.gift == 1 ? true : false;
    this.gift_message = order.gift_message;
    this.mobile_theme = order.mobile_theme == 1 ? true : false;
    this.total_discounts = Number(order.total_discounts);
    this.total_discounts_tax_incl = Number(order.total_discounts_tax_incl);
    this.total_discounts_tax_excl = Number(order.total_discounts_tax_excl);
    this.total_paid = Number(order.total_paid);
    this.total_paid_tax_incl = Number(order.total_paid_tax_incl);
    this.total_paid_tax_exl = Number(order.total_paid_tax_exl);
    this.total_paid_real = Number(order.total_paid_real);
    this.total_products = Number(order.total_products);
    this.total_products_wt = Number(order.total_products_wt);
    this.total_shipping = Number(order.total_shipping);
    this.total_shipping_tax_incl = Number(order.total_shipping_tax_incl);
    this.total_shipping_tax_excl = Number(order.total_shipping_tax_excl);
    this.carrier_tax_rate = Number(order.carrier_tax_rate);
    this.total_wrapping = Number(order.total_wrapping);
    this.total_wrapping_tax_incl = Number(order.total_wrapping_tax_incl);
    this.total_wrapping_tax_excl = Number(order.total_wrapping_tax_excl);
    this.round_mode = order.round_mode;
    this.round_type = order.round_type;
    this.conversion_rate = Number(order.conversion_rate);
    this.reference = order.reference;

    const orderRows: OrderRow[] = new Array();

    order.associations.order_rows?.forEach((orderRow: OrderRowSchema) => {
      orderRows.push({
        id: orderRow.id,
        product_id: orderRow.product_id,
        product_attribute_id: orderRow.product_attribute_id,
        product_quantity: orderRow.product_quantity,
        product_name: orderRow.product_name,
        product_reference: orderRow.product_reference,
        product_ean13: orderRow.product_ean13,
        product_isbn: orderRow.product_isbn,
        product_upc: orderRow.product_upc,
        product_price: orderRow.product_price,
        id_customization: orderRow.id_customization,
        unit_price_tax_incl: Number(orderRow.unit_price_tax_incl),
        unit_price_tax_excl: Number(orderRow.unit_price_tax_excl),
      } as OrderRow);
    });

    this.associations = { order_rows: orderRows } as Association;
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
}
