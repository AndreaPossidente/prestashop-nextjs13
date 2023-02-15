import Model from "./Model";

export default class Currency extends Model {
  static ENDPOINT = "currencies";

  constructor(currency) {
    super();
    this.id = currency.id;
    this.names = currency.names;
    this.name = currency.name;
    this.symbol = currency.symbol;
    this.iso_code = currency.iso_code;
    this.numeric_iso_code = currency.numeric_iso_code;
    this.precision = currency.precision;
    this.conversion_rate = currency.conversion_rate;
    this.deleted = currency.deleted;
    this.active = currency.active;
    this.unofficial = currency.unofficial;
    this.modified = currency.modified;
    this.pattern = currency.pattern;
  }

  // names		❌
  // name	isGenericName	✔️	255	true
  // symbol		❌	255
  // iso_code	isLanguageIsoCode	✔️	3
  // numeric_iso_code	isNumericIsoCode	❌	3
  // precision	isInt	❌
  // conversion_rate	isUnsignedFloat	✔️
  // deleted	isBool	❌
  // active	isBool	❌
  // unofficial	isBool	❌
  // modified	isBool	❌
  // pattern		❌	255

  // add non static CRUD
}
