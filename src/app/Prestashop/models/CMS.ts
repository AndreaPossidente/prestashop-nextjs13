import Category from "./Category";
import Model from "./Model";

export default class CMS extends Model {
  static ENDPOINT = "content_management_system";

  id: number;
  /** CMS Category ID */
  id_cms_category: number;
  position: number;
  indexation: boolean;
  active: boolean;
  meta_description: string;
  meta_keywords: string;
  meta_title: string;
  head_seo_title: string;
  link_rewrite: string;
  content: string;

  constructor(cms: CMSInterface) {
    super();
    this.id = cms.id;
    this.id_cms_category = cms.id_cms_category;
    this.position = cms.position;
    this.indexation = cms.indexation == 1 ? true : false;
    this.active = cms.active == 1 ? true : false;
    this.meta_description = cms.meta_description;
    this.meta_keywords = cms.meta_keywords;
    this.meta_title = cms.meta_title;
    this.head_seo_title = cms.head_seo_title;
    this.link_rewrite = cms.link_rewrite;
    this.content = cms.content;
  }

  category = async () => {
    return await Category.findById(this.id_cms_category);
  };
}
