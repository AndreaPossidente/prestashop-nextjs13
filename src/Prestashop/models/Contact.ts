import Model from "./Model";

export default class Contact extends Model {
  static ENDPOINT = "contacts";

  id: number;
  email: string;
  customer_service: boolean;
  name: string;
  description: string;

  constructor(contact: ContactSchema) {
    super();
    this.id = contact.id;
    this.email = contact.email;
    this.customer_service = contact.customer_service == 1 ? true : false;
    this.name = contact.name;
    this.description = contact.description;
  }

  // add non static CRUD
}
