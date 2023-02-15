import Address from "./Address";
import CustomerThread from "./CustomerThread";
import Model from "./Model";

export default class CustomerMessage extends Model {
  static ENDPOINT = "customer_messages";
  static MODEL_NAME = "customer_message";

  constructor(customerMessage) {
    super();
    this.id = customerMessage.id;
    this.id_employee = customerMessage.id_employee;
    this.id_customer_thread = customerMessage.id_customer_thread;
    this.id_address = customerMessage.id_address;
    this.message = customerMessage.message;
    this.file_name = customerMessage.file_name;
    this.user_agent = customerMessage.user_agent;
    this.private = customerMessage.private;
    this.date_add = customerMessage.date_add;
    this.date_upd = customerMessage.date_upd;
    this.read = customerMessage.read;
  }

  async employee() {
    return await Employee.findById(this.id_employee);
  }
  async customerThread() {
    return await CustomerThread.findById(this.id_customer_thread);
  }
  async address() {
    return await Address.findById(this.id_address);
  }

  // id_employee	isUnsignedId	❌		Employee ID
  // id_customer_thread		❌		Customer Thread ID
  // ip_address	isIp2Long	❌	15
  // message	isCleanHtml	✔️	16777216
  // file_name		❌
  // user_agent		❌
  // private	isBool	❌
  // date_add	isDate	❌
  // date_upd	isDate	❌
  // read	isBool	❌

  // add non static CRUD
}
