import Country from "./Country";
import Model from "./Model";
import State from "./State";

export default class Store extends Model {
  static ENDPOINT = "stores";

  constructor(store) {
    super();
    this.id = store.id;
    this.id_country = store.id_country;
    this.id_state = store.id_state;
    this.hours = store.hours;
    this.postcode = store.postcode;
    this.city = store.city;
    this.latitude = store.latitude;
    this.longitude = store.longitude;
    this.phone = store.phone;
    this.fax = store.fax;
    this.email = store.email;
    this.active = store.active;
    this.date_add = store.date_add;
    this.date_upd = store.date_upd;
    this.name = store.name;
    this.address1 = store.address1;
    this.address2 = store.address2;
    this.note = store.note;
  }

  async country() {
    return await Country.findById(this.id_country);
  }

  async state() {
    return await State.findById(this.id_state);
  }

  //   id_country	isUnsignedId	✔️		Country ID
  //   id_state	isNullOrUnsignedId	❌		State ID
  //   hours	isJson	❌	65000
  //   postcode		❌	12
  //   city	isCityName	✔️	64
  //   latitude	isCoordinate	❌	13
  //   longitude	isCoordinate	❌	13
  //   phone	isPhoneNumber	❌	16
  //   fax	isPhoneNumber	❌	16
  //   email	isEmail	❌	255
  //   active	isBool	✔️
  //   date_add	isDate	❌
  //   date_upd	isDate	❌
  //   name	isGenericName	✔️	255
  //   address1	isAddress	✔️	255
  //   address2	isAddress	❌	255
  //   note	isCleanHtml	❌	65000

  // add non static CRUD
}
