import Currency from "./Currency";
import Language from "./Language";
import Model from "./Model";
import Supplier from "./Supplier";
import SupplyOrderState from "./SupplyOrderState";
import Warehouse from "./Warehouse";

export default class SupplyOrder extends Model {
  static ENDPOINT = "supply_orders";

  id: number;
  id_supplier: number;
  id_lang: number;
  id_warehouse: number;
  id_supply_order_state: number;
  id_currency: number;
  supplier_name: string;
  reference: string;
  date_delivery_expected: Date;
  total_te: number;
  total_with_discount_te: number;
  total_ti: number;
  total_tax: number;
  discount_rate: number;
  discount_value_te: number;
  is_template: boolean;
  date_add: Date;
  date_upd: Date;
  associations: AssociationSchema;

  constructor(supplyOrder: SupplyOrderSchema) {
    super();
    this.id = supplyOrder.id;
    this.id_supplier = supplyOrder.id_supplier;
    this.id_lang = supplyOrder.id_lang;
    this.id_warehouse = supplyOrder.id_warehouse;
    this.id_supply_order_state = supplyOrder.id_supply_order_state;
    this.id_currency = supplyOrder.id_currency;
    this.supplier_name = supplyOrder.supplier_name;
    this.reference = supplyOrder.reference;
    this.date_delivery_expected = new Date(supplyOrder.date_delivery_expected);
    this.total_te = Number(supplyOrder.total_te);
    this.total_with_discount_te = Number(supplyOrder.total_with_discount_te);
    this.total_ti = Number(supplyOrder.total_ti);
    this.total_tax = Number(supplyOrder.total_tax);
    this.discount_rate = Number(supplyOrder.discount_rate);
    this.discount_value_te = Number(supplyOrder.discount_value_te);
    this.is_template = supplyOrder.is_template == 1 ? true : false;
    this.date_add = new Date(supplyOrder.date_add);
    this.date_upd = new Date(supplyOrder.date_upd);
    this.associations = supplyOrder.associations;
  }

  async supplier() {
    return await Supplier.findById(this.id_supplier);
  }

  async lang() {
    return await Language.findById(this.id_lang);
  }

  async warehouse() {
    return await Warehouse.findById(this.id_warehouse);
  }

  async supplyOrderState() {
    return await SupplyOrderState.findById(this.id_supply_order_state);
  }

  async currency() {
    return await Currency.findById(this.id_currency);
  }
}
