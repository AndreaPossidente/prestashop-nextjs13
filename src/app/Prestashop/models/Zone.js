import Model from "./Model";

export default class Zone extends Model {
  static ENDPOINT = "zones";
  static MODEL_NAME = "zone";

  constructor(zone) {
    super();
    this.id = zone.id;
    this.name = zone.name;
    this.active = zone.active;
  }

  // add non static CRUD
}
