import Category from "./Category";
import Model from "./Model";

export default class CMS extends Model {
  static ENDPOINT = "content_management_system";

  constructor(cms) {
    super();
    this.id = cms.id;
    this.id_cms_category = cms.id_cms_category;
    this.position = cms.position;
    this.indexation = cms.indexation;
    this.active = cms.active;
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

  // id_cms_category	isUnsignedInt	❌		CMS Category ID
  // position		❌
  // indexation		❌
  // active		❌
  // meta_description	isGenericName	❌	512
  // meta_keywords	isGenericName	❌	255
  // meta_title	isGenericName	✔️	255
  // head_seo_title	isGenericName	❌	255
  // link_rewrite	isLinkRewrite	✔️	128
  // content	isCleanHtml	❌	3999999999999

  // add non static CRUD
}
