import Carrier from "./Carrier";
import Model from "./Model";
import Zone from "./Zone";

export default class Delivery extends Model {
  static ENDPOINT = "deliveries";

  constructor(delivery) {
    super();
    this.id = delivery.id;
    this.id_carrier = delivery.id_carrier;
    this.id_range_price = delivery.id_range_price;
    this.id_range_weight = delivery.id_range_weight;
    this.id_zone = delivery.id_zone;
    this.id_shop = delivery.id_shop;
    this.id_shop_group = delivery.id_shop_group;
    this.price = delivery.price;
  }

  async carrier() {
    return await Carrier.findById(this.id_carrier);
  }

  async rangePrice() {
    return await RangePrice.findById(this.id_range_price);
  }

  async rangeWeight() {
    return await RangeWeight.findById(this.id_range_weight);
  }

  async zone() {
    return await Zone.findById(this.id_zone);
  }

  async shop() {
    return await Shop.findById(this.id_shop);
  }

  async shopGroup() {
    return await ShopGroup.findById(this.id_shop_group);
  }

  //   id_carrier	isUnsignedId	✔️	Carrier ID
  //   id_range_price	isUnsignedId	✔️	Range price ID
  //   id_range_weight	isUnsignedId	✔️
  //   id_zone	isUnsignedId	✔️	Zone ID
  //   id_shop		❌	Shop ID
  //   id_shop_group		❌	Shop group ID
  //   price	isPrice	✔️

  // add non static CRUD
}
