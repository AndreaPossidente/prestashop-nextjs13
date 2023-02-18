import Model from "./Model";

export default class Carrier extends Model {
  static ENDPOINT = "carriers";

  id: number;
  deleted: boolean;
  is_module: boolean;
  /** Tax rules group ID */
  id_tax_rules_group: number;
  /** Reference ID */
  id_reference: number;
  name: string;
  active: boolean;
  is_free: boolean;
  url: string;
  /** Defines if extra shipping handling cost should be applied to this Carrier */
  shipping_handling: boolean;
  /** Defines if external module calculates shipping cost */
  shipping_external: number;
  /** Defines out-of-range behavior for weight, true=disable carrier, false=apply highest defined range */
  range_behavior: boolean;
  /** Calculation method : by weight, by price, or free */
  shipping_method: number;
  max_width: number;
  max_height: number;
  max_depth: number;
  max_weight: number;
  /** The "Speed grade" setting enables you to give the carrier a grade, from 0 (very slow) to 9 (very fast). */
  grade: number;
  /** Name of the external module in charge of calculating the shipping cost */
  external_module_name: string;
  /** Defines if module needs core range-based shipping cost to calculate final cost */
  need_range: boolean;
  position: number;
  delay: string;

  constructor(carrier: CarrierInterface) {
    super();
    this.id = carrier.id;
    this.id_tax_rules_group = carrier.id_tax_rules_group;
    this.id_reference = carrier.id_reference;
    this.deleted = carrier.deleted == 1 ? true : false;
    this.is_module = carrier.is_module == 1 ? true : false;
    this.name = carrier.name;
    this.active = carrier.active == 1 ? true : false;
    this.is_free = carrier.is_free == 1 ? true : false;
    this.url = carrier.url;
    this.shipping_handling = carrier.shipping_handling == 1 ? true : false;
    this.shipping_external = carrier.shipping_external;
    this.range_behavior = carrier.range_behavior == 1 ? true : false;
    this.shipping_method = carrier.shipping_method;
    this.max_width = Number(carrier.max_width);
    this.max_height = Number(carrier.max_height);
    this.max_depth = Number(carrier.max_depth);
    this.max_weight = Number(carrier.max_weight);
    this.grade = carrier.grade;
    this.external_module_name = carrier.external_module_name;
    this.need_range = carrier.need_range == 1 ? true : false;
    this.position = carrier.position;
    this.delay = carrier.delay;
  }

  // async taxRulesGroup() {
  //   return await TaxRulesGroup.findById(this.id_tax_rules_group);
  // }

  // async reference() {
  //   return await Referenc.findById(this.id_reference);
  // }
}
