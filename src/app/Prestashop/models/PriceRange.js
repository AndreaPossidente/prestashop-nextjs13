import Carrier from "./Carrier";
import Model from "./Model";

export default class PriceRange extends Model {
  static ENDPOINT = "price_ranges";

  constructor(priceRange) {
    super();
    this.id = priceRange.id;
    this.id_carrier = priceRange.id_carrier;
    this.delimeter1 = priceRange.delimeter1;
    this.delimeter2 = priceRange.delimeter2;
  }

  async carrier() {
    return await Carrier.findById(this.id_carrier);
  }

  //   id_carrier	isInt	✔️	Carrier ID
  //   delimiter1	isUnsignedFloat	✔️
  //   delimiter2	isUnsignedFloat	✔️

  // add non static CRUD
}
