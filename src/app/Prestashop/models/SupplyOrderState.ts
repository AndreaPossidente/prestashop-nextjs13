import Model from "./Model";

export default class SupplyOrderState extends Model {
  static ENDPOINT = "supply_order_states";

  id: number;
  delivery_note: boolean;
  editable: boolean;
  receipt_state: boolean;
  pending_receipt: boolean;
  enclosed: boolean;
  color: string;
  name: string;

  constructor(supplyOrderState: SupplyOrderStateSchema) {
    super();
    this.id = supplyOrderState.id;
    this.delivery_note = supplyOrderState.delivery_note == 1 ? true : false;
    this.editable = supplyOrderState.editable == 1 ? true : false;
    this.receipt_state = supplyOrderState.receipt_state == 1 ? true : false;
    this.pending_receipt = supplyOrderState.pending_receipt == 1 ? true : false;
    this.enclosed = supplyOrderState.enclosed == 1 ? true : false;
    this.color = supplyOrderState.color;
    this.name = supplyOrderState.name;
  }
}
