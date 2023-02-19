import Address from "./Address";
import CustomerThread from "./CustomerThread";
import Employee from "./Employee";
import Model from "./Model";

export default class CustomerMessage extends Model {
  static ENDPOINT = "customer_messages";

  id: number;
  id_employee: number;
  id_customer_thread: number;
  id_address: number;
  message: string;
  file_name: string;
  user_agent: string;
  private: boolean;
  date_add: Date;
  date_upd: Date;
  read: boolean;

  constructor(customerMessage: CustomerMessageSchema) {
    super();
    this.id = customerMessage.id;
    this.id_employee = customerMessage.id_employee;
    this.id_customer_thread = customerMessage.id_customer_thread;
    this.id_address = customerMessage.id_address;
    this.message = customerMessage.message;
    this.file_name = customerMessage.file_name;
    this.user_agent = customerMessage.user_agent;
    this.private = customerMessage.private == 1 ? true : false;
    this.date_add = new Date(customerMessage.date_add);
    this.date_upd = new Date(customerMessage.date_upd);
    this.read = customerMessage.read == 1 ? true : false;
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
}
