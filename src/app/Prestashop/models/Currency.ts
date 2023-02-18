import Model from "./Model";

export default class Currency extends Model {
  static ENDPOINT = "currencies";

  id: number;
  names: string;
  name: string;
  symbol: string;
  iso_code: string;
  numeric_iso_code: string;
  precision: number;
  conversion_rate: number;
  deleted: boolean;
  active: boolean;
  unofficial: boolean;
  modified: boolean;
  pattern: string;

  constructor(currency: CurrencyInterface) {
    super();
    this.id = currency.id;
    this.names = currency.names;
    this.name = currency.name;
    this.symbol = currency.symbol;
    this.iso_code = currency.iso_code;
    this.numeric_iso_code = currency.numeric_iso_code;
    this.precision = currency.precision;
    this.conversion_rate = Number(currency.conversion_rate);
    this.deleted = currency.deleted == 1 ? true : false;
    this.active = currency.active == 1 ? true : false;
    this.unofficial = currency.unofficial == 1 ? true : false;
    this.modified = currency.modified == 1 ? true : false;
    this.pattern = currency.pattern;
  }
}
