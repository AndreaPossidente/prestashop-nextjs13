import Carrier from "./Carrier";
import Model from "./Model";

export default class WeightRange extends Model {
  static ENDPOINT = "weight_ranges";

  id: number;
  id_carrier: number;
  delimiter1: number;
  delimiter2: number;

  constructor(weightRange: WeightRangeSchema) {
    super();
    this.id = weightRange.id;
    this.id_carrier = weightRange.id_carrier;
    this.delimiter1 = Number(weightRange.delimiter1);
    this.delimiter2 = Number(weightRange.delimiter2);
  }

  async carrier() {
    return await Carrier.findById(this.id_carrier);
  }
}
