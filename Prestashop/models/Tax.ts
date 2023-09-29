import Model from "./Model";

export default class Tax extends Model {
  static ENDPOINT = "taxes";

  id: number;
  rate: number;
  active: boolean;
  deleted: boolean;
  name: string;

  constructor(tax: TaxSchema) {
    super();
    this.id = tax.id;
    this.rate = Number(tax.rate);
    this.active = tax.active == 1 ? true : false;
    this.deleted = tax.deleted == 1 ? true : false;
    this.name = tax.name;
  }
}
