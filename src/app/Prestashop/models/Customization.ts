import Address from "./Address";
import Cart from "./Cart";
import Combination from "./Combination";
import Model from "./Model";
import Product from "./Product";

export default class Customization extends Model {
  static ENDPOINT = "customizations";

  id: number;
  id_address_delivery: number;
  id_cart: number;
  id_product: number;
  id_product_attribute: number;
  quantity: number;
  quantity_refunded: number;
  quantity_returned: number;
  in_cart: boolean;
  associations: AssociationSchema;

  constructor(customization: CustomizationSchema) {
    super();
    this.id = customization.id;
    this.id_address_delivery = customization.id_address_delivery;
    this.id_cart = customization.id_cart;
    this.id_product = customization.id_product;
    this.id_product_attribute = customization.id_product_attribute;
    this.quantity = customization.quantity;
    this.quantity_refunded = customization.quantity_refunded;
    this.quantity_returned = customization.quantity_returned;
    this.in_cart = customization.in_cart == 1 ? true : false;
    this.associations = customization.associations;
  }

  async addressDelivery() {
    return await Address.findById(this.id_address_delivery);
  }

  async cart() {
    return await Cart.findById(this.id_cart);
  }

  async product() {
    return await Product.findById(this.id_product);
  }

  async productAttribute() {
    return await Combination.findById(this.id_product_attribute);
  }
}
