import Model from "./Model";

export default class Category extends Model {
  static ENDPOINT = "categories";

  constructor(category) {
    super();
    this.id = category.id;
    this.id_parent = category.id_parent;
    this.nb_products_recursive = category.nb_products_recursive;
    this.active = category.active;
    this.id_shop_default = category.id_shop_default;
    this.is_root_category = category.is_root_category;
    this.position = category.position;
    this.date_add = category.date_add;
    this.date_upd = category.date_upd;
    this.name = category.name;
    this.link_rewrite = category.link_rewrite;
    this.description = category.description;
    this.meta_title = category.meta_title;
    this.meta_description = category.meta_description;
    this.meta_keywords = category.meta_keywords;
    this.associations = category.associations;
  }

  /**
   * Returns the parent category, if it doesn't exists returns null
   */
  async parent() {
    if (!this.is_root_category) return await this.findById(this.id_parent);
    return null;
  }

  /**
   * Returns an array of children categories
   */
  async childrens() {
    return await this.find({ id_parent: this.id }).catch((err) => null);
  }

  // id_parent	isUnsignedInt	❌	✔️			Parent ID
  // level_depth	isUnsignedInt	❌	❌
  // nb_products_recursive		❌	❌		true
  // active	isBool	✔️	✔️
  // id_shop_default	isUnsignedId	❌	✔️			Default shop ID
  // is_root_category	isBool	❌	✔️
  // position		❌	✔️
  // date_add	isDate	❌	✔️
  // date_upd	isDate	❌	✔️
  // name	isCatalogName	✔️	✔️	128
  // link_rewrite	isLinkRewrite	✔️	✔️	128
  // description	isCleanHtml	❌	✔️
  // meta_title	isGenericName	❌	✔️	255
  // meta_description	isGenericName	❌	✔️	512
  // meta_keywords	isGenericName	❌	✔️	255
  // associations		❌	✔️

  // add non static CRUD
}
