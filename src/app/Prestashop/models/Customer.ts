import Model from "./Model";

export default class Customer extends Model {
  static ENDPOINT = "customers";

  id: number;
  id_default_group: number;
  id_lang: number;
  newsletter_date_add: Date;
  ip_registration_newsletter: string;
  last_passwd_gen: string;
  secure_key: string;
  deleted: boolean;
  passwd: string;
  lastname: string;
  firstname: string;
  email: string;
  id_gender: number;
  birthday: Date;
  newsletter: boolean;
  optin: boolean;
  website: string;
  company: string;
  siret: string;
  ape: string;
  outstanding_allow_amount: string;
  show_public_prices: boolean;
  id_risk: number;
  max_payment_days: number;
  active: boolean;
  note: string;
  is_guest: boolean;
  id_shop: number;
  id_shop_group: number;
  date_add: Date;
  date_upd: Date;
  reset_password_token: string;
  reset_password_validity: Date | null;
  associations: AssociationSchema;

  constructor(customer: CustomerSchema) {
    super();
    this.id = customer.id;
    this.id_default_group = customer.id_default_group;
    this.id_lang = customer.id_lang;
    this.id_shop = customer.id_shop;
    this.id_shop_group = customer.id_shop_group;
    this.id_gender = customer.id_gender;
    this.id_risk = customer.id_risk;
    this.ip_registration_newsletter = customer.ip_registration_newsletter;
    this.last_passwd_gen = customer.last_passwd_gen;
    this.deleted = customer.deleted == 1 ? true : false;
    this.secure_key = customer.secure_key;
    this.passwd = customer.passwd;
    this.lastname = customer.lastname;
    this.firstname = customer.firstname;
    this.email = customer.email;
    this.birthday = new Date(customer.birthday);
    this.newsletter = customer.newsletter == 1 ? true : false;
    this.optin = customer.optin == 1 ? true : false;
    this.website = customer.website;
    this.company = customer.company;
    this.siret = customer.siret;
    this.ape = customer.ape;
    this.outstanding_allow_amount = customer.outstanding_allow_amount;
    this.show_public_prices = customer.show_public_prices == 1 ? true : false;
    this.max_payment_days = customer.max_payment_days;
    this.active = customer.active == 1 ? true : false;
    this.note = customer.note;
    this.is_guest = customer.is_guest == 1 ? true : false;
    this.newsletter_date_add = new Date(customer.newsletter_date_add);
    this.date_add = new Date(customer.date_add);
    this.date_upd = new Date(customer.date_upd);
    this.reset_password_token = customer.reset_password_token;
    this.reset_password_validity =
      new Date(customer.reset_password_validity) || null;
    this.associations = customer.associations;
  }
}
