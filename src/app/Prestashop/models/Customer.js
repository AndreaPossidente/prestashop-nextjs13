import Model from "./Model";

export default class Customer extends Model {
  static ENDPOINT = "customers";

  constructor(customer) {
    super();
    this.id = customer.id;
    this.id_default_group = customer.id_default_group;
    this.id_lang = customer.id_lang;
    this.newsletter_date_add = customer.newsletter_date_add;
    this.ip_registration_newsletter = customer.ip_registration_newsletter;
    this.last_passwd_gen = customer.last_passwd_gen;
    this.secure_key = customer.secure_key;
    this.deleted = customer.deleted;
    this.passwd = customer.passwd;
    this.lastname = customer.lastname;
    this.firstname = customer.firstname;
    this.email = customer.email;
    this.id_gender = customer.id_gender;
    this.birthday = customer.birthday;
    this.newsletter = customer.newsletter;
    this.optin = customer.optin;
    this.website = customer.website;
    this.company = customer.company;
    this.siret = customer.siret;
    this.ape = customer.ape;
    this.outstanding_allow_amount = customer.outstanding_allow_amount;
    this.show_public_prices = customer.show_public_prices;
    this.id_risk = customer.id_risk;
    this.max_payment_days = customer.max_payment_days;
    this.active = customer.active;
    this.note = customer.note;
    this.is_guest = customer.is_guest;
    this.id_shop = customer.id_shop;
    this.id_shop_group = customer.id_shop_group;
    this.date_add = customer.date_add;
    this.date_upd = customer.date_upd;
    this.reset_password_token = customer.reset_password_token;
    this.reset_password_validity = customer.reset_password_validity;
    this.associations = customer.associations;
  }

  //   id_default_group		❌	✔️		Default group ID
  //   id_lang	isUnsignedId	❌	✔️		Lang ID
  //   newsletter_date_add		❌	✔️
  //   ip_registration_newsletter		❌	✔️
  //   last_passwd_gen		❌	❌
  //   secure_key	isMd5	❌	❌
  //   deleted	isBool	❌	✔️
  //   passwd	isPasswd	✔️	✔️	255
  //   lastname	isCustomerName	✔️	✔️	255
  //   firstname	isCustomerName	✔️	✔️	255
  //   email	isEmail	✔️	✔️	255
  //   id_gender	isUnsignedId	❌	✔️		Gender ID
  //   birthday	isBirthDate	❌	✔️
  //   newsletter	isBool	❌	✔️
  //   optin	isBool	❌	✔️
  //   website	isUrl	❌	✔️
  //   company	isGenericName	❌	✔️
  //   siret	isGenericName	❌	✔️
  //   ape	isApe	❌	✔️
  //   outstanding_allow_amount	isFloat	❌	✔️
  //   show_public_prices	isBool	❌	✔️
  //   id_risk	isUnsignedInt	❌	✔️		Risk ID
  //   max_payment_days	isUnsignedInt	❌	✔️
  //   active	isBool	❌	✔️
  //   note		❌	✔️	65000
  //   is_guest	isBool	❌	✔️
  //   id_shop	isUnsignedId	❌	✔️		Shop ID
  //   id_shop_group	isUnsignedId	❌	✔️		Shop group ID
  //   date_add	isDate	❌	✔️
  //   date_upd	isDate	❌	✔️
  //   reset_password_token	isSha1	❌	✔️	40
  //   reset_password_validity	isDateOrNull	❌	✔️
  //   associations		❌	✔️

  // add non static CRUD
}
