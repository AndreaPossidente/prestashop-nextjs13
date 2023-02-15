import Model from "./Model";

export default class Employee extends Model {
  static ENDPOINT = "employees";

  constructor(employee) {
    super();
    this.id = employee.id;
    this.id_lang = employee.id_lang;
    this.last_passwd_gen = employee.last_passwd_gen;
    this.stats_date_from = employee.stats_date_from;
    this.stats_date_to = employee.stats_date_to;
    this.stats_compare_from = employee.stats_compare_from;
    this.stats_compare_to = employee.stats_compare_to;
    this.passwd = employee.passwd;
    this.lastname = employee.lastname;
    this.firstname = employee.firstname;
    this.email = employee.email;
    this.active = employee.active;
    this.id_profile = employee.id_profile;
    this.bo_color = employee.bo_color;
    this.default_tab = employee.default_tab;
    this.bo_theme = employee.bo_theme;
    this.bo_css = employee.bo_css;
    this.bo_width = employee.bo_width;
    this.bo_menu = employee.bo_menu;
    this.stats_compare_option = employee.stats_compare_option;
    this.preselect_date_range = employee.preselect_date_range;
    this.id_last_order = employee.id_last_order;
    this.id_last_customer_message = employee.id_last_customer_message;
    this.id_last_customer = employee.id_last_customer;
    this.reset_password_token = employee.reset_password_token;
    this.reset_password_validity = employee.reset_password_validity;
    this.has_enabled_gravatar = employee.has_enabled_gravatar;
  }

  //   id_lang	isUnsignedInt	✔️	✔️		Lang ID
  //   last_passwd_gen		❌	❌
  //   stats_date_from	isDate	❌	❌
  //   stats_date_to	isDate	❌	❌
  //   stats_compare_from	isDate	❌	❌
  //   stats_compare_to	isDate	❌	❌
  //   passwd	isPasswd	✔️	✔️	255
  //   lastname	isName	✔️	✔️	255
  //   firstname	isName	✔️	✔️	255
  //   email	isEmail	✔️	✔️	255
  //   active	isBool	❌	✔️
  //   id_profile	isInt	✔️	✔️		Profile ID
  //   bo_color	isColor	❌	✔️	32
  //   default_tab	isInt	❌	✔️
  //   bo_theme	isGenericName	❌	✔️	32
  //   bo_css	isGenericName	❌	✔️	64
  //   bo_width	isUnsignedInt	❌	✔️
  //   bo_menu	isBool	❌	✔️
  //   stats_compare_option	isUnsignedInt	❌	✔️
  //   preselect_date_range		❌	✔️	32
  //   id_last_order	isUnsignedInt	❌	✔️		Last order ID
  //   id_last_customer_message	isUnsignedInt	❌	✔️		Last customer message ID
  //   id_last_customer	isUnsignedInt	❌	✔️		Last customer ID
  //   reset_password_token	isSha1	❌	✔️	40
  //   reset_password_validity	isDateOrNull	❌	✔️
  //   has_enabled_gravatar	isBool	❌	✔️

  // add non static CRUD
}
