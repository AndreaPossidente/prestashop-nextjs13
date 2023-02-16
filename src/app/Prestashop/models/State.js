import Country from "./Country";
import Model from "./Model";
import Zone from "./Zone";

export default class State extends Model {
  static ENDPOINT = "states";

  constructor(state) {
    super();
    this.id = state.id;
    this.id_zone = state.id_zone;
    this.id_country = state.id_country;
    this.iso_code = state.iso_code;
    this.name = state.name;
    this.active = state.active;
  }

  async zone() {
    return await Zone.findById(this.id_zone);
  }

  async country() {
    return await Country.findById(this.id_country);
  }

  // id_zone	isUnsignedId	✔️		Zone ID
  // id_country	isUnsignedId	✔️		Country ID
  // iso_code	isStateIsoCode	✔️	7
  // name	isGenericName	✔️	32
  // active	isBool	❌

  // add non static CRUD
}
