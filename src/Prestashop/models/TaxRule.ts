import Country from "./Country";
import Model from "./Model";
import State from "./State";
import Tax from "./Tax";
import TaxRuleGroup from "./TaxRuleGroup";

export default class TaxRule extends Model {
  static ENDPOINT = "tax_rules";

  id: number;
  id_tax_rules_group: number;
  id_state: number;
  id_country: number;
  zipcode_from: string;
  zipcode_to: string;
  id_tax: number;
  behavior: number;
  description: string;

  constructor(taxRule: TaxRuleSchema) {
    super();
    this.id = taxRule.id;
    this.id_tax_rules_group = taxRule.id_tax_rules_group;
    this.id_state = taxRule.id_state;
    this.id_country = taxRule.id_country;
    this.zipcode_from = taxRule.zipcode_from;
    this.zipcode_to = taxRule.zipcode_to;
    this.id_tax = taxRule.id_tax;
    this.behavior = taxRule.behavior;
    this.description = taxRule.description;
  }

  async taxRuleGroup() {
    return await TaxRuleGroup.findById(this.id_tax_rules_group);
  }

  async state() {
    return await State.findById(this.id_state);
  }

  async country() {
    return await Country.findById(this.id_country);
  }

  async tax() {
    return await Tax.findById(this.id_tax);
  }
}
