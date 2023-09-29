import Category from "./Category";
import Combination from "./Combination";
import Manufacturer from "./Manufacturer";
import Model from "./Model";
import Shop from "./Shop";
import Supplier from "./Supplier";

export default class Product extends Model {
  static ENDPOINT = "products";

  id: number;
  id_manufacturer: number;
  id_supplier: number;
  id_category_default: number;
  id_default_image: number;
  id_default_combination: number;
  id_tax_rules_group: number;
  id_shop_default: number;
  new: number | null;
  cache_default_attribute: number;
  position_in_category: number;
  manufacturer_name: string;
  quantity: number;
  type: string;
  reference: string;
  supplier_reference: string;
  location: string;
  width: number;
  height: number;
  depth: number;
  weight: number;
  quantity_discount: boolean;
  ean13: string;
  isbn: string;
  upc: string;
  mpn: string;
  cache_is_pack: boolean;
  cache_has_attachments: boolean;
  is_virtual: boolean;
  state: number;
  additonal_delivery_times: number;
  delivery_in_stock: string;
  delivery_out_stock: string;
  product_type: string;
  on_sale: boolean;
  online_only: boolean;
  ecotax: number;
  minimal_quantity: number;
  low_stock_threshold: null | number;
  low_stock_alert: boolean;
  unity: string;
  unit_price: string;
  unit_price_ratio: string;
  additional_shipping_cost: number;
  customizable: number;
  text_fields: number;
  uploadable_files: number;
  active: boolean;
  redirect_type: string;
  id_type_redirected: number;
  available_for_order: boolean;
  available_date: Date;
  show_condition: boolean;
  condition: string;
  show_price: boolean;
  indexed: boolean;
  visibility: string;
  advanced_stock_management: boolean;
  date_add: Date;
  date_upd: Date;
  pack_stock_type: number;
  meta_description: string;
  meta_keywords: string;
  meta_title: string;
  link_rewrite: string;
  name: string;
  description: string;
  description_short: string;
  available_now: string;
  available_later: string;
  associations: AssociationSchema;
  prices: {
    price: number;
    wholesale_price: number;
    price_normal: number;
    price_reduced: number;
  };

  category: Category | undefined;
  manufacturer: Manufacturer | undefined;

  constructor(product: ProductSchema) {
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
    this.width = Number(product.width);
    this.height = Number(product.height);
    this.depth = Number(product.depth);
    this.weight = Number(product.weight);
    this.quantity_discount = product.quantity_discount == 1 ? true : false;
    this.ean13 = product.ean13;
    this.isbn = product.isbn;
    this.upc = product.upc;
    this.mpn = product.mpn;
    this.cache_is_pack = product.cache_is_pack == 1 ? true : false;
    this.cache_has_attachments =
      product.cache_has_attachments == 1 ? true : false;
    this.is_virtual = product.is_virtual == 1 ? true : false;
    this.state = product.state;
    this.additonal_delivery_times = product.additonal_delivery_times;
    this.delivery_in_stock = product.delivery_in_stock;
    this.delivery_out_stock = product.delivery_out_stock;
    this.on_sale = product.on_sale == 1 ? true : false;
    this.online_only = product.online_only == 1 ? true : false;
    this.ecotax = Number(product.ecotax);
    this.minimal_quantity = product.minimal_quantity;
    this.low_stock_threshold = product.low_stock_threshold;
    this.low_stock_alert = product.low_stock_alert == 1 ? true : false;
    this.prices = {
      price: Number(product.price),
      wholesale_price: Number(product.wholesale_price),
      price_normal: Number(product.price_normal),
      price_reduced: Number(product.price_reduced),
    };
    this.unity = product.unity;
    this.unit_price = product.unit_price;
    this.product_type = product.product_type;
    this.unit_price_ratio = product.unit_price_ratio;
    this.additional_shipping_cost = Number(product.additional_shipping_cost);
    this.customizable = product.customizable;
    this.text_fields = product.text_fields;
    this.uploadable_files = product.uploadable_files;
    this.active = product.active == 1 ? true : false;
    this.redirect_type = product.redirect_type;
    this.id_type_redirected = product.id_type_redirected;
    this.available_for_order = product.available_for_order == 1 ? true : false;
    this.available_date = new Date(product.available_date);
    this.show_condition = product.show_condition == 1 ? true : false;
    this.condition = product.condition;
    this.show_price = product.show_price == 1 ? true : false;
    this.indexed = product.indexed == 1 ? true : false;
    this.visibility = product.visibility;
    this.advanced_stock_management =
      product.advanced_stock_management == 1 ? true : false;
    this.date_add = new Date(product.date_add);
    this.date_upd = new Date(product.date_upd);
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

    this.category = undefined;
    this.manufacturer = undefined;
  }

  // Model.find()
  static async find(
    filter: Filter = {},
    options: Options = { exactMatch: false, limit: 0, offset: 0 }
  ) {
    let params: URLSearchParams = new URLSearchParams({
      ws_key: String(this.PS_API_KEY),
      io_format: "JSON",
      display: "full",
      "price[price_reduced][use_tax]": "1",
      "price[price_normal][use_tax]": "1",
      "price[price_normal][use_reduction]": "0",
    });
    let uri = `${this.PS_URI}/api/${this.ENDPOINT}?${params}`;

    if (filter) {
      for (let key in filter) {
        uri += "&filter[";
        uri += key;
        uri += options.exactMatch ? "]=[" : "]=%[";
        uri += filter[key];
        uri += options.exactMatch ? "]" : "]%";
      }
    }

    if (options.limit && options.limit > 0) {
      uri += `&limit=${options.offset},${options.limit}`;
    }

    const res = await fetch(uri, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 30 },
    });

    const json = await res.json();

    const objects = new Array();
    if (this.ENDPOINT)
      json[this.ENDPOINT].forEach((obj: ProductSchema) => {
        objects.push(new Product(obj));
      });

    return objects;
  }

  // Model.findById()
  static async findById(id: number = 0): Promise<Product> {
    let uri = `${this.PS_URI}/api/${this.ENDPOINT}/${id}?ws_key=${this.PS_API_KEY}&io_format=JSON&display=full&limit=1&price[price_reduced][use_tax]=1&full&price[price_normal][use_tax]=1&full&price[price_normal][use_reduction]=0`;

    const res = await fetch(uri, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 30 },
    });

    const json = await res.json();
    return new Product(this.MODEL_NAME || json[this.ENDPOINT][0]);
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

  async defaultCombination() {
    return await Combination.findById(this.id_default_combination);
  }

  async defaultShop() {
    return await Shop.findById(this.id_shop_default);
  }
}
