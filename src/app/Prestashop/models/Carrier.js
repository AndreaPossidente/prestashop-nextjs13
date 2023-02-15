import Model from "./Model";

export default class Carrier extends Model {
  static ENDPOINT = "carriers";
  static MODEL_NAME = "carrier";

  constructor(carrier) {
    super();
    this.id = carrier.id;
    this.deleted = carrier.deleted;
    this.is_module = carrier.is_module;
    this.id_tax_rules_group = carrier.id_tax_rules_group;
    this.id_reference = carrier.id_reference;
    this.name = carrier.name;
    this.active = carrier.active;
    this.is_free = carrier.is_free;
    this.url = carrier.url;
    this.shipping_handling = carrier.shipping_handling;
    this.shipping_external = carrier.shipping_external;
    this.range_behavior = carrier.range_behavior;
    this.shipping_method = carrier.shipping_method;
    this.max_width = carrier.max_width;
    this.max_height = carrier.max_height;
    this.max_depth = carrier.max_depth;
    this.max_weight = carrier.max_weight;
    this.grade = carrier.grade;
    this.external_module_name = carrier.external_module_name;
    this.need_range = carrier.need_range;
    this.position = carrier.position;
    this.delay = carrier.delay;
  }

  // add non static CRUD
}
