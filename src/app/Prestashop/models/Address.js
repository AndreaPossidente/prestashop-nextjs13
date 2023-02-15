import Country from "./Country";
import Customer from "./Customer";
import Model from "./Model";

export default class Address extends Model {
  static ENDPOINT = "addresses";
  static MODEL_NAME = "address";

  constructor(address) {
    super();
    this.id = address.id;
    this.id_customer = address.id_customer;
    this.id_manufacturer = address.id_manufacturer;
    this.id_supplier = address.id_supplier;
    this.id_warehouse = address.id_warehouse;
    this.id_country = address.id_country;
    this.id_state = address.id_state;
    this.alias = address.alias;
    this.company = address.company;
    this.lastname = address.lastname;
    this.firstname = address.firstname;
    this.vat_number = address.vat_number;
    this.address1 = address.address1;
    this.address2 = address.address2;
    this.postcode = address.postcode;
    this.city = address.city;
    this.other = address.other;
    this.phone = address.phone;
    this.phone_mobile = address.phone_mobile;
    this.dni = address.dni;
    this.deleted = address.deleted;
    this.date_add = address.date_add;
    this.date_upd = address.date_upd;
  }

  async customer() {
    return await Customer.findById(this.id_customer);
  }

  async manufacturer() {
    return await Manufacturer.findById(this.id_manufacturer);
  }

  async supplier() {
    return await Supplier.findById(this.id_supplier);
  }

  async warehouse() {
    return await Warehouse.findById(this.id_warehouse);
  }

  async country() {
    return await Country.findById(this.id_country);
  }

  async state() {
    return await State.findById(this.id_state);
  }

  // add non static CRUD
}
