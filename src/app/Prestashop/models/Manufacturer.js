import Model from "./Model";

export default class Manufacturer extends Model {
  static ENDPOINT = "manufacturers";

  constructor(manufacturer) {
    super();
    this.id = manufacturer.id;
    this.active = manufacturer.active;
    this.link_rewrite = manufacturer.link_rewrite;
    this.name = manufacturer.name;
    this.date_add = manufacturer.date_add;
    this.date_upd = manufacturer.date_upd;
    this.description = manufacturer.description;
    this.short_description = manufacturer.short_description;
    this.meta_title = manufacturer.meta_title;
    this.meta_description = manufacturer.meta_description;
    this.meta_keywords = manufacturer.meta_keywords;
    this.associations = manufacturer.associations;
  }

  //   active		❌	✔️
  //   link_rewrite		❌	❌		true
  //   name	isCatalogName	✔️	✔️	64
  //   date_add		❌	✔️
  //   date_upd		❌	✔️
  //   description	isCleanHtml	❌	✔️
  //   short_description	isCleanHtml	❌	✔️
  //   meta_title	isGenericName	❌	✔️	255
  //   meta_description	isGenericName	❌	✔️	512
  //   meta_keywords	isGenericName	❌	✔️
  //   associations		❌	✔️

  // add non static CRUD
}
