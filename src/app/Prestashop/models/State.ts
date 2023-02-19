import Country from "./Country";
import Model from "./Model";
import Zone from "./Zone";

export default class State extends Model {
  static ENDPOINT = "states";

  id: number;
  id_zone: number;
  id_country: number;
  iso_code: string;
  name: string;
  active: boolean;

  constructor(state: StateSchema) {
    super();
    this.id = state.id;
    this.id_zone = state.id_zone;
    this.id_country = state.id_country;
    this.iso_code = state.iso_code;
    this.name = state.name;
    this.active = state.active == 1 ? true : false;
  }

  async zone() {
    return await Zone.findById(this.id_zone);
  }

  async country() {
    return await Country.findById(this.id_country);
  }
}
