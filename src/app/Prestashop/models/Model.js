import Prestashop from "@/app/services/Prestashop";

export default class Model extends Prestashop {
  static ENDPOINT = null;
  static MODEL_NAME = null;

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

  // Model.deleteMany()
  static async deleteMany(filter = undefined) {
    let uri = `${this.PS_URI}/api/${this.ENDPOINT}?ws_key=${this.PS_API_KEY}&io_format=JSON`;
    let deletedCount = 0;
    const objects = await this.findAll(filter);

    for (let obj in objects) {
      const res = await fetch(uri, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          id: obj.id,
        },
      });
      deletedCount++;
    }
    const json = res.json();
    return { json, deletedCount };
  }

  // Model.deleteOne()
  static async deleteOne(filter = undefined) {
    let uri = `${this.PS_URI}/api/${this.ENDPOINT}?ws_key=${this.PS_API_KEY}&io_format=JSON&limit=1`;

    const obj = await this.findOne(filter);

    const res = await fetch(uri, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        id: obj.id,
      },
    });

    const json = res.json();
    return { json };
  }

  // Model.find()
  static async find(filter = undefined, options = { exactMatch: false }) {
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
    const objects = [];
    json[this.ENDPOINT].forEach((z) => {
      objects.push(new this(z));
    });

    return objects;
  }

  // Model.findById()
  static async findById(id = undefined) {
    let uri = `${this.PS_URI}/api/${this.ENDPOINT}/${id}?ws_key=${this.PS_API_KEY}&io_format=JSON&display=full&limit=1`;

    const res = await fetch(uri, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    return new this(this.MODEL_NAME || json[this.ENDPOINT][0]);
  }

  // Model.findOne()
  static async findOne(filter = undefined, options = { exactMatch: false }) {
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
    return new this(json[this.ENDPOINT][0]);
  }
}
