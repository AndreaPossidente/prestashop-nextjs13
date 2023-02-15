import Model from "./Model";
import Contact from "./Contact";
import Customer from "./Customer";

export default class CustomerThread extends Model {
  static ENDPOINT = "customer_threads";
  static MODEL_NAME = "customer_thread";

  constructor(customerThread) {
    super();
    this.id = customerThread.id;
    this.id_lang = customerThread.id_lang;
    this.id_shop = customerThread.id_shop;
    this.id_customer = customerThread.id_customer;
    this.id_order = customerThread.id_order;
    this.id_product = customerThread.id_product;
    this.id_contact = customerThread.id_contact;
    this.email = customerThread.email;
    this.token = customerThread.token;
    this.status = customerThread.status;
    this.date_add = customerThread.date_add;
    this.date_upd = customerThread.date_upd;
    this.associations = customerThread.associations;
  }

  async lang() {
    return await Lang.findById(this.id_lang);
  }

  async shop() {
    return await Shop.findById(this.id_shop);
  }

  async customer() {
    return await Customer.findById(this.id_customer);
  }
  async order() {
    return await Order.findById(this.id_order);
  }
  async product() {
    return await Product.findById(this.id_product);
  }
  async contact() {
    return await Contact.findById(this.id_contact);
  }

  // id_lang	isUnsignedId	✔️		Lang ID
  // id_shop	isUnsignedId	❌		Shop ID
  // id_customer	isUnsignedId	❌		Customer ID
  // id_order	isUnsignedId	❌		Order ID
  // id_product	isUnsignedId	❌		Product ID
  // id_contact	isUnsignedId	✔️		Contact ID
  // email	isEmail	❌	255
  // token	isGenericName	✔️
  // status		❌
  // date_add	isDate	❌
  // date_upd	isDate	❌
  // associations		❌

  // add non static CRUD
}
