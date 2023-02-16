import Model from "./Model";

export default class StockMovementReason extends Model {
  static ENDPOINT = "stock_movement_reasons";

  constructor(stockMovementReason) {
    super();
    this.id = stockMovementReason.id;
    this.sign = stockMovementReason.sign;
    this.deleted = stockMovementReason.deleted;
    this.date_add = stockMovementReason.date_add;
    this.date_upd = stockMovementReason.date_upd;
    this.name = stockMovementReason.name;
  }

  //   sign		❌
  //   deleted		❌
  //   date_add	isDate	❌
  //   date_upd	isDate	❌
  //   name	isGenericName	✔️	255

  // add non static CRUD
}
