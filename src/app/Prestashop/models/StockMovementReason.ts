import Model from "./Model";

export default class StockMovementReason extends Model {
  static ENDPOINT = "stock_movement_reasons";

  id: number;
  sign: number;
  deleted: boolean;
  date_add: Date;
  date_upd: Date;
  name: string;

  constructor(stockMovementReason: StockMovementReasonSchema) {
    super();
    this.id = stockMovementReason.id;
    this.sign = stockMovementReason.sign;
    this.deleted = stockMovementReason.deleted == 1 ? true : false;
    this.date_add = new Date(stockMovementReason.date_add);
    this.date_upd = new Date(stockMovementReason.date_upd);
    this.name = stockMovementReason.name;
  }
}
