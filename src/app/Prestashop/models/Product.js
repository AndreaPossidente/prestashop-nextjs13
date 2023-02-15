import Category from "./Category";
import Combination from "./Combination";
import Model from "./Model";

export default class Product extends Model {
  static ENDPOINT = "products";

  constructor(product) {
    super();
    this.id = product.id;
    this.id_manufacturer = product.id_manufacturer;
    this.id_supplier = product.id_supplier;
    this.id_category_default = product.id_category_default;
    this.new = product.new;
    this.cache_default_attribute = product.cache_default_attribute;
    this.id_default_image = product.id_default_image;
    this.id_default_combination = product.id_default_combination;
    this.id_tax_rules_group = product.id_tax_rules_group;
    this.position_in_category = product.position_in_category;
    this.manufacturer_name = product.manufacturer_name;
    this.quantity = product.quantity;
    this.type = product.type;
    this.id_shop_default = product.id_shop_default;
    this.reference = product.reference;
    this.supplier_reference = product.supplier_reference;
    this.location = product.location;
    this.width = product.width;
    this.height = product.height;
    this.depth = product.depth;
    this.weight = product.weight;
    this.quantity_discount = product.quantity_discount;
    this.ean13 = product.ean13;
    this.isbn = product.isbn;
    this.upc = product.upc;
    this.mpn = product.mpn;
    this.cache_is_pack = product.cache_is_pack;
    this.cache_has_attachments = product.cache_has_attachments;
    this.is_virtual = product.is_virtual;
    this.state = product.state;
    this.additonal_delivery_times = product.additonal_delivery_times;
    this.delivery_in_stock = product.delivery_in_stock;
    this.delivery_out_stock = product.delivery_out_stock;
    this.on_sale = product.on_sale;
    this.online_only = product.online_only;
    this.ecotax = product.ecotax;
    this.minimal_quantity = product.minimal_quantity;
    this.low_stock_threshold = product.low_stock_threshold;
    this.low_stock_alert = product.low_stock_alert;
    this.price = product.price;
    this.wholesale_price = product.wholesale_price;
    this.unity = product.unity;
    this.unit_price_ratio = product.unit_price_ratio;
    this.additional_shipping_cost = product.additional_shipping_cost;
    this.customizable = product.customizable;
    this.text_fields = product.text_fields;
    this.uploadable_files = product.uploadable_files;
    this.active = product.active;
    this.redirect_type = product.redirect_type;
    this.id_type_redirected = product.id_type_redirected;
    this.available_for_order = product.available_for_order;
    this.available_date = product.available_date;
    this.show_condition = product.show_condition;
    this.condition = product.condition;
    this.show_price = product.show_price;
    this.indexed = product.indexed;
    this.visibility = product.visibility;
    this.advanced_stock_management = product.advanced_stock_management;
    this.date_add = product.date_add;
    this.date_upd = product.date_upd;
    this.pack_stock_type = product.pack_stock_type;
    this.meta_description = product.meta_description;
    this.meta_keywords = product.meta_keywords;
    this.meta_title = product.meta_title;
    this.link_rewrite = product.link_rewrite;
    this.name = product.name;
    this.description = product.description;
    this.description_short = product.description_short;
    this.available_now = product.available_now;
    this.available_later = product.available_later;
    this.associations = product.associations;
    this.price_normal = Number(product.price_normal);
    this.price_reduced = Number(product.price_reduced);

    this.category = null;
    this.manufacturer = null;
  }

  // Model.find()
  static async find(
    filter = undefined,
    options = { exactMatch: false, limit: 0, offset: 0 }
  ) {
    let uri = `${this.PS_URI}/api/${this.ENDPOINT}?ws_key=${this.PS_API_KEY}&io_format=JSON&display=full&price[price_reduced][use_tax]=1&full&price[price_normal][use_tax]=1&full&price[price_normal][use_reduction]=0`;

    if (filter) {
      for (let key in filter) {
        uri += "&filter[";
        uri += key;
        uri += options.exactMatch ? "]=[" : "]=%[";
        uri += filter[key];
        uri += options.exactMatch ? "]" : "]%";
      }
    }

    if (options.limit > 0) {
      uri += `&limit=${options.offset},${options.limit}`;
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
    let uri = `${this.PS_URI}/api/${this.ENDPOINT}/${id}?ws_key=${this.PS_API_KEY}&io_format=JSON&display=full&limit=1&price[price_reduced][use_tax]=1&full&price[price_normal][use_tax]=1&full&price[price_normal][use_reduction]=0`;

    const res = await fetch(uri, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    return new this(this.MODEL_NAME || json[this.ENDPOINT][0]);
  }

  async getManufacturer() {
    this.manufacturer = await Manufacturer.findById(this.id_manufacturer);
  }

  async supplier() {
    return await Supplier.findById(this.id_supplier);
  }

  async defaultCategory() {
    this.category = await Category.findById(this.id_category_default);
  }

  async defaultImage() {
    return await Image.findById(this.id_default_image, this.id);
  }

  async defaultCombination() {
    return await Combination.findById(this.id_default_combination);
  }

  async defaultShop() {
    return await Shop.findById(this.id_shop_default);
  }

  async taxRulesGroup() {
    return await TaxRulesGroup.findById(this.id_tax_rules_group);
  }

  //   id_manufacturer	isUnsignedId	❌	✔️			Manufacturer ID
  //   id_supplier	isUnsignedId	❌	✔️			Supplier ID
  //   id_category_default	isUnsignedId	❌	✔️
  //   new		❌	✔️
  //   cache_default_attribute		❌	✔️
  //   id_default_image		❌	✔️		true
  //   id_default_combination		❌	✔️		true
  //   id_tax_rules_group	isUnsignedId	❌	✔️			Tax rules group ID
  //   position_in_category		❌	✔️		true
  //   manufacturer_name		❌	❌		true
  //   quantity		❌	❌		true
  //   type		❌	✔️		true
  //   id_shop_default	isUnsignedId	❌	✔️			Default shop ID
  //   reference	isReference	❌	✔️	64
  //   supplier_reference	isReference	❌	✔️	64
  //   location	isString	❌	✔️	255
  //   width	isUnsignedFloat	❌	✔️
  //   height	isUnsignedFloat	❌	✔️
  //   depth	isUnsignedFloat	❌	✔️
  //   weight	isUnsignedFloat	❌	✔️
  //   quantity_discount	isBool	❌	✔️
  //   ean13	isEan13	❌	✔️	13
  //   isbn	isIsbn	❌	✔️	32
  //   upc	isUpc	❌	✔️	12
  //   mpn	isMpn	❌	✔️	40
  //   cache_is_pack	isBool	❌	✔️
  //   cache_has_attachments	isBool	❌	✔️
  //   is_virtual	isBool	❌	✔️
  //   state	isUnsignedId	❌	✔️
  //   additional_delivery_times	isUnsignedId	❌	✔️
  //   delivery_in_stock	isGenericName	❌	✔️	255
  //   delivery_out_stock	isGenericName	❌	✔️	255
  //   on_sale	isBool	❌	✔️
  //   online_only	isBool	❌	✔️
  //   ecotax	isPrice	❌	✔️
  //   minimal_quantity	isUnsignedInt	❌	✔️
  //   low_stock_threshold	isInt	❌	✔️
  //   low_stock_alert	isBool	❌	✔️
  //   price	isPrice	✔️	✔️
  //   wholesale_price	isPrice	❌	✔️
  //   unity	isString	❌	✔️
  //   unit_price_ratio		❌	✔️
  //   additional_shipping_cost	isPrice	❌	✔️
  //   customizable	isUnsignedInt	❌	✔️
  //   text_fields	isUnsignedInt	❌	✔️
  //   uploadable_files	isUnsignedInt	❌	✔️
  //   active	isBool	❌	✔️
  //   redirect_type	isString	❌	✔️
  //   id_type_redirected	isUnsignedId	❌	✔️
  //   available_for_order	isBool	❌	✔️
  //   available_date	isDateFormat	❌	✔️
  //   show_condition	isBool	❌	✔️
  //   condition	isGenericName	❌	✔️
  //   show_price	isBool	❌	✔️
  //   indexed	isBool	❌	✔️
  //   visibility	isProductVisibility	❌	✔️
  //   advanced_stock_management	isBool	❌	✔️
  //   date_add	isDate	❌	✔️
  //   date_upd	isDate	❌	✔️
  //   pack_stock_type	isUnsignedInt	❌	✔️
  //   meta_description	isGenericName	❌	✔️	512
  //   meta_keywords	isGenericName	❌	✔️	255
  //   meta_title	isGenericName	❌	✔️	255
  //   link_rewrite	isLinkRewrite	❌	✔️	128
  //   name	isCatalogName	❌	✔️	128
  //   description	isCleanHtml	❌	✔️
  //   description_short	isCleanHtml	❌	✔️
  //   available_now	isGenericName	❌	✔️	255
  //   available_later	IsGenericName	❌	✔️	255
  //   associations		❌	✔️

  // add non static CRUD
}
