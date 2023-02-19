import Country from "./Country";
import Model from "./Model";
import State from "./State";

export default class Store extends Model {
  static ENDPOINT = "stores";

  id: number;
  id_country: number;
  id_state: number;
  hours: string;
  postcode: string;
  city: string;
  latitude: number;
  longitude: number;
  phone: string;
  fax: string;
  email: string;
  active: boolean;
  date_add: Date;
  date_upd: Date;
  name: string;
  address1: string;
  address2: string;
  note: string;

  constructor(store: StoreSchema) {
    super();
    this.id = store.id;
    this.id_country = store.id_country;
    this.id_state = store.id_state;
    this.hours = store.hours;
    this.postcode = store.postcode;
    this.city = store.city;
    this.latitude = Number(store.latitude);
    this.longitude = Number(store.longitude);
    this.phone = store.phone;
    this.fax = store.fax;
    this.email = store.email;
    this.active = store.active == 1 ? true : false;
    this.date_add = new Date(store.date_add);
    this.date_upd = new Date(store.date_upd);
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
}
