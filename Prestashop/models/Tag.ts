import Language from "./Language";
import Model from "./Model";

export default class Tag extends Model {
  static ENDPOINT = "tags";

  id: number;
  id_lang: number;
  name: string;

  constructor(tag: TagSchema) {
    super();
    this.id = tag.id;
    this.id_lang = tag.id_lang;
    this.name = tag.name;
  }

  async lang() {
    return await Language.findById(this.id_lang);
  }
}
