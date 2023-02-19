import Model from "./Model";

export default class Supplier extends Model {
  static ENDPOINT = "suppliers";

  id: number;
  link_rewrite: string;
  name: string;
  active: boolean;
  date_add: Date;
  date_upd: Date;
  description: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;

  constructor(supplier: SupplierSchema) {
    super();
    this.id = supplier.id;
    this.link_rewrite = supplier.link_rewrite;
    this.name = supplier.name;
    this.active = supplier.active == 1 ? true : false;
    this.date_add = new Date(supplier.date_add);
    this.date_upd = new Date(supplier.date_upd);
    this.description = supplier.description;
    this.meta_title = supplier.meta_title;
    this.meta_description = supplier.meta_description;
    this.meta_keywords = supplier.meta_keywords;
  }
}
