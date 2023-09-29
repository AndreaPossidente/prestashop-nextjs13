import Model from "./Model";
import Zone from "./Zone";
import Currency from "./Currency";

export default class Country extends Model {
  static ENDPOINT = "countries";

  id: number;
  id_zone: number;
  id_currency: number;
  call_prefix: number;
  iso_code: string;
  active: boolean;
  contains_states: boolean;
  need_identification_number: boolean;
  need_zip_code: boolean;
  zip_code_format: string;
  display_tax_label: boolean;
  name: string;

  constructor(country: CountrySchema) {
    super();
    this.id = country.id;
    this.id_zone = country.id_zone;
    this.id_currency = country.id_currency;
    this.call_prefix = country.call_prefix;
    this.iso_code = country.iso_code;
    this.active = country.active == 1 ? true : false;
    this.contains_states = country.contains_states == 1 ? true : false;
    this.need_identification_number =
      country.need_identification_number == 1 ? true : false;
    this.need_zip_code = country.need_zip_code == 1 ? true : false;
    this.zip_code_format = country.zip_code_format;
    this.display_tax_label = country.display_tax_label == 1 ? true : false;
    this.name = country.name;
  }

  async zone() {
    return await Zone.findById(this.id_zone);
  }

  async currency() {
    return await Currency.findById(this.id_currency);
  }
}
