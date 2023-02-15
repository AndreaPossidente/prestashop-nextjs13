import Address from "./Address";
import Cart from "./Cart";
import Model from "./Model";

export default class Customization extends Model {
  static ENDPOINT = "customizations";

  constructor(customization) {
    super();
    this.id = customization.id;
    this.id_address_delivery = customization.id_address_delivery;
    this.id_cart = customization.id_cart;
    this.id_product = customization.id_product;
    this.id_product_attribute = customization.id_product_attribute;
    this.quantity = customization.quantity;
    this.quantity_refunded = customization.quantity_refunded;
    this.quantity_returned = customization.quantity_returned;
    this.in_cart = customization.in_cart;
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
    return await ProductAttribute.findById(this.id_product_attribute);
  }

  //   id_address_delivery	isUnsignedId	✔️	Delivery address ID
  //   id_cart	isUnsignedId	✔️	Cart ID
  //   id_product	isUnsignedId	✔️	Product ID
  //   id_product_attribute	isUnsignedId	✔️	Product attribute ID
  //   quantity	isUnsignedId	✔️
  //   quantity_refunded	isUnsignedId	✔️
  //   quantity_returned	isUnsignedId	✔️
  //   in_cart	isBool	✔️
  //   associations		❌

  // add non static CRUD
}
