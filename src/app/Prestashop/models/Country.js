import Model from "./Model";
import Zone from "./Zone";
import Currency from "./Currency";

export default class Country extends Model {
  static ENDPOINT = "countries";

  constructor(country) {
    super();
    this.id = country.id;
    this.id_zone = country.id_zone;
    this.id_currency = country.id_currency;
    this.call_prefix = country.call_prefix;
    this.iso_code = country.iso_code;
    this.active = country.active;
    this.contains_states = country.contains_states;
    this.need_identification_number = country.need_identification_number;
    this.need_zip_code = country.need_zip_code;
    this.zip_code_format = country.zip_code_format;
    this.display_tax_label = country.display_tax_label;
    this.name = country.name;
  }

  async zone() {
    return await Zone.findById(this.id_zone);
  }

  async currency() {
    return await Currency.findById(this.id_currency);
  }

  // id_zone	isUnsignedId	✔️		Zone ID
  // id_currency	isUnsignedId	❌		Currency ID
  // call_prefix	isInt	❌
  // iso_code	isLanguageIsoCode	✔️	3
  // active	isBool	❌
  // contains_states	isBool	✔️
  // need_identification_number	isBool	✔️
  // need_zip_code	isBool	❌
  // zip_code_format	isZipCodeFormat	❌
  // display_tax_label	isBool	✔️
  // name	isGenericName	✔️	64

  // add non static CRUD
}
