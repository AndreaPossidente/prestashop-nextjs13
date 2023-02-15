import Model from "./Model";

export default class Contact extends Model {
  static ENDPOINT = "contacts";
  static MODEL_NAME = "contact";

  constructor(contact) {
    super();
    this.id = contact.id;
    this.email = contact.email;
    this.customer_service = contact.customer_service;
    this.name = contact.name;
    this.description = contact.description;
  }

  // add non static CRUD
}
