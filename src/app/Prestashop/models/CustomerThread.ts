import Model from "./Model";
import Contact from "./Contact";
import Customer from "./Customer";
import Language from "./Language";
import Shop from "./Shop";
import Order from "./Order";
import Product from "./Product";

export default class CustomerThread extends Model {
  static ENDPOINT = "customer_threads";
  static MODEL_NAME = "customer_thread";

  id: number;
  id_lang: number;
  id_shop: number;
  id_customer: number;
  id_order: number;
  id_product: number;
  id_contact: number;
  email: string;
  token: string;
  status: number;
  date_add: string;
  date_upd: string;
  associations: AssociationSchema;

  constructor(customerThread: CustomerThreadSchema) {
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
    return await Language.findById(this.id_lang);
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
