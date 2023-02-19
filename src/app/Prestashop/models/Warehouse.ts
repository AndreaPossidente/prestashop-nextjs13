import Address from "./Address";
import Currency from "./Currency";
import Employee from "./Employee";
import Model from "./Model";

export default class Warehouse extends Model {
  static ENDPOINT = "warehouses";

  id: number;
  id_address: number;
  id_employee: number;
  id_currency: number;
  valuation: string;
  deleted: boolean;
  reference: string;
  name: string;
  management_type: string;
  associations: AssociationSchema;

  constructor(warehouse: WarehouseSchema) {
    super();
    this.id = warehouse.id;
    this.id_address = warehouse.id_address;
    this.id_employee = warehouse.id_employee;
    this.id_currency = warehouse.id_currency;
    this.valuation = warehouse.valuation;
    this.deleted = warehouse.deleted == 1 ? true : false;
    this.reference = warehouse.reference;
    this.name = warehouse.name;
    this.management_type = warehouse.management_type;
    this.associations = warehouse.associations;
  }

  async address() {
    return await Address.findById(this.id_address);
  }

  async employee() {
    return await Employee.findById(this.id_employee);
  }

  async currency() {
    return await Currency.findById(this.id_currency);
  }
}
