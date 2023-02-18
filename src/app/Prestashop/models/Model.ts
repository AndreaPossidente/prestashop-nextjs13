import Prestashop from "../Prestashop";

export default class Model extends Prestashop {
  static ENDPOINT: string | undefined = undefined;
  static MODEL_NAME: string | undefined = undefined;

  constructor(...args: any[]) {
    super();
  }

  // Model.deleteMany()
  // Model.deleteOne()
  // Model.findByIdAndDelete()
  // Model.findByIdAndRemove()
  // Model.findByIdAndUpdate()
  // Model.findOneAndDelete()
  // Model.findOneAndRemove()
  // Model.findOneAndReplace()
  // Model.findOneAndUpdate()
  // Model.replaceOne()
  // Model.updateMany()
  // Model.updateOne()

  // Model.find()
  static async find(
    filter: Filter = {},
    options: Options = { exactMatch: false }
  ) {
    let uri = `${this.PS_URI}/api/${this.ENDPOINT}?ws_key=${this.PS_API_KEY}&io_format=JSON&display=full`;

    if (filter) {
      for (let key in filter) {
        uri += "&filter[";
        uri += key;
        uri += options.exactMatch ? "]=[" : "]=%[";
        uri += filter[key];
        uri += options.exactMatch ? "]" : "]%";
      }
    }

    const res = await fetch(uri, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    const objects = new Array();
    if (this.ENDPOINT)
      json[this.ENDPOINT].forEach((obj: any) => {
        objects.push(new this(obj));
      });

    return objects;
  }

  // Model.findById()
  static async findById(id: number): Promise<any> {
    let uri = `${this.PS_URI}/api/${this.ENDPOINT}/${id}?ws_key=${this.PS_API_KEY}&io_format=JSON&display=full&limit=1`;

    const res = await fetch(uri, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    return new this(this.MODEL_NAME || json[this.ENDPOINT!][0]);
  }

  // Model.findOne()
  static async findOne(
    filter: Filter = {},
    options: Options = { exactMatch: false }
  ): Promise<any> {
    let uri = `${this.PS_URI}/api/${this.ENDPOINT}?ws_key=${this.PS_API_KEY}&io_format=JSON&display=full&limit=1`;

    if (filter) {
      for (let key in filter) {
        uri += "&filter[";
        uri += key;
        uri += options.exactMatch ? "]=[" : "]=%[";
        uri += filter[key];
        uri += options.exactMatch ? "]" : "]%";
      }
    }

    const res = await fetch(uri, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    return new this(json[this.ENDPOINT!][0]);
  }
}