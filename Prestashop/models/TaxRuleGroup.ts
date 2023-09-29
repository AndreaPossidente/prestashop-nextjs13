import Model from "./Model";

export default class TaxRuleGroup extends Model {
  static ENDPOINT = "tax_rule_groups";

  id: number;
  name: string;
  active: boolean;
  deleted: boolean;
  date_add: Date;
  date_upd: Date;

  constructor(taxRuleGroup: TaxRuleGroupSchema) {
    super();
    this.id = taxRuleGroup.id;
    this.name = taxRuleGroup.name;
    this.active = taxRuleGroup.active == 1 ? true : false;
    this.deleted = taxRuleGroup.deleted == 1 ? true : false;
    this.date_add = new Date(taxRuleGroup.date_add);
    this.date_upd = new Date(taxRuleGroup.date_upd);
  }
}
