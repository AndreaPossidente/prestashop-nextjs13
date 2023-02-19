import Model from "./Model";
import Shop from "./Shop";

export default class Category extends Model {
  static ENDPOINT = "categories";

  id: number;
  /** Parent Category */
  id_parent: number;
  /** Shop ID */
  id_shop_default: number;
  nb_products_recursive: number;
  active: boolean;
  is_root_category: boolean;
  position: number;
  date_add: Date;
  date_upd: Date;
  name: string;
  link_rewrite: string;
  description: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  associations: AssociationSchema;

  constructor(category: CategorySchema) {
    super();
    this.id = category.id;
    this.id_parent = category.id_parent;
    this.nb_products_recursive = category.nb_products_recursive;
    this.active = category.active == 1 ? true : false;
    this.id_shop_default = category.id_shop_default;
    this.is_root_category = category.is_root_category == 1 ? true : false;
    this.position = category.position;
    this.date_add = new Date(category.date_add);
    this.date_upd = new Date(category.date_upd);
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
    if (!this.is_root_category) return await Category.findById(this.id_parent);
    return null;
  }

  /**
   * Returns an array of children categories
   */
  async childrens() {
    return await Category.find({ id_parent: this.id }).catch((err) => null);
  }

  async shop() {
    return Shop.findById(this.id_shop_default);
  }
}
