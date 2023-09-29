import Carrier from "./Carrier";
import Model from "./Model";

export default class PriceRange extends Model {
  static ENDPOINT = "price_ranges";

  id: number;
  id_carrier: number;
  delimeter1: number;
  delimeter2: number;

  constructor(priceRange: PriceRangeSchema) {
    super();
    this.id = priceRange.id;
    this.id_carrier = priceRange.id_carrier;
    this.delimeter1 = Number(priceRange.delimeter1);
    this.delimeter2 = Number(priceRange.delimeter2);
  }

  async carrier() {
    return await Carrier.findById(this.id_carrier);
  }
}
