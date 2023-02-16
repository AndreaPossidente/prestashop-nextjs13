import Model from "./Model";

export default class Supplier extends Model {
  static ENDPOINT = "suppliers";

  constructor(supplier) {
    super();
    this.id = supplier.id;
    this.link_rewrite = supplier.link_rewrite;
    this.name = supplier.name;
    this.active = supplier.active;
    this.date_add = supplier.date_add;
    this.date_upd = supplier.date_upd;
    this.description = supplier.description;
    this.meta_title = supplier.meta_title;
    this.meta_description = supplier.meta_description;
    this.meta_keywords = supplier.meta_keywords;
  }

  //   link_rewrite		❌
  //   name	isCatalogName	✔️	64
  //   active		❌
  //   date_add	isDate	❌
  //   date_upd	isDate	❌
  //   description	isCleanHtml	❌
  //   meta_title	isGenericName	❌	255
  //   meta_description	isGenericName	❌	512
  //   meta_keywords	isGenericName	❌	255

  // add non static CRUD
}
