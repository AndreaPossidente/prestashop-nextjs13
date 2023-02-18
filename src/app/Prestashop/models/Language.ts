import Model from "./Model";

export default class Language extends Model {
  static ENDPOINT = "languages";

  id: number;
  name: string;
  iso_code: string;
  locale: string;
  active: boolean;
  is_rtl: boolean;
  date_format_lite: string;
  date_format_full: string;

  constructor(language: LanguageInterface) {
    super();
    this.id = language.id;
    this.name = language.name;
    this.iso_code = language.iso_code;
    this.locale = language.locale;
    this.active = language.active == 1 ? true : false;
    this.is_rtl = language.is_rtl == 1 ? true : false;
    this.date_format_lite = language.date_format_lite;
    this.date_format_full = language.date_format_full;
  }
}
