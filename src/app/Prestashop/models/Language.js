import Model from "./Model";

export default class Language extends Model {
  static ENDPOINT = "languages";

  constructor(language) {
    super();
    this.id = language.id;
    this.name = language.name;
    this.iso_code = language.iso_code;
    this.locale = language.locale;
    this.active = language.active;
    this.is_rtl = language.is_rtl;
    this.date_format_lite = language.date_format_lite;
    this.date_format_full = language.date_format_full;
  }

  //   name	isGenericName	✔️	32
  //   iso_code	isLanguageIsoCode	✔️	2
  //   locale	isLocale	❌	5
  //   language_code	isLanguageCode	❌	5
  //   active	isBool	❌
  //   is_rtl	isBool	❌
  //   date_format_lite	isPhpDateFormat	✔️	32
  //   date_format_full	isPhpDateFormat	✔️	32

  // add non static CRUD
}
