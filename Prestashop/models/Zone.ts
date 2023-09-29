import Model from "./Model";

export default class Zone extends Model {
  static ENDPOINT = "zones";
  static MODEL_NAME = "zone";

  id: number;
  name: string;
  active: boolean;

  constructor(zone: ZoneSchema) {
    super();
    this.id = zone.id;
    this.name = zone.name;
    this.active = zone.active == 1 ? true : false;
  }
}
