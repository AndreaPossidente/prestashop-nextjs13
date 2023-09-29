import Model from "./Model";
import Product from "./Product";
import ProductOption from "./ProductOption";
import Warehouse from "./Warehouse";

export default class WarehouseProductLocation extends Model {
  static ENDPOINT = "warehouse_product_locations";

  id: number;
  id_product: number;
  id_product_attribute: number;
  id_warehouse: number;
  location: string;

  constructor(warehouseProductLocation: WarehouseProductLocationSchema) {
    super();
    this.id = warehouseProductLocation.id;
    this.id_product = warehouseProductLocation.id_product;
    this.id_product_attribute = warehouseProductLocation.id_product_attribute;
    this.id_warehouse = warehouseProductLocation.id_warehouse;
    this.location = warehouseProductLocation.location;
  }

  async product() {
    return await Product.findById(this.id_product);
  }

  async productAttribute() {
    return await ProductOption.findById(this.id_product_attribute);
  }

  async warehouse() {
    return await Warehouse.findById(this.id_warehouse);
  }
}
