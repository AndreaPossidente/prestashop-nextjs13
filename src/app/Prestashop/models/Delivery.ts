import Carrier from "./Carrier";
import Model from "./Model";
import PriceRange from "./PriceRange";
import Shop from "./Shop";
import ShopGroup from "./ShopGroup";
import WeightRange from "./WeightRange";
import Zone from "./Zone";

export default class Delivery extends Model {
  static ENDPOINT = "deliveries";

  id: number;
  /** Carrier ID */
  id_carrier: number;
  /** Range price ID */
  id_range_price: number;
  id_range_weight: number;
  /** Zone ID */
  id_zone: number;
  /** Shop ID */
  id_shop: number;
  /** Shop group ID */
  id_shop_group: number;
  price: number;

  constructor(delivery: DeliverySchema) {
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

  async priceRange() {
    return await PriceRange.findById(this.id_range_price);
  }

  async weightRange() {
    return await WeightRange.findById(this.id_range_weight);
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
}
