import Model from "./Model";

export default class Manufacturer extends Model {
  static ENDPOINT = "manufacturers";

  id: number;
  active: boolean;
  link_rewrite: string;
  name: string;
  date_add: Date;
  date_upd: Date;
  description: string;
  short_description: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  associations: AssociationSchema;

  constructor(manufacturer: ManufacturerSchema) {
    super();
    this.id = Number(manufacturer.id);
    this.active = manufacturer.active == 1 ? true : false;
    this.link_rewrite = manufacturer.link_rewrite;
    this.name = manufacturer.name;
    this.date_add = new Date(manufacturer.date_add);
    this.date_upd = new Date(manufacturer.date_upd);
    this.description = manufacturer.description;
    this.short_description = manufacturer.short_description;
    this.meta_title = manufacturer.meta_title;
    this.meta_description = manufacturer.meta_description;
    this.meta_keywords = manufacturer.meta_keywords;
    this.associations = manufacturer.associations;
  }
}
