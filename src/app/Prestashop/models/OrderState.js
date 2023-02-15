import Model from "./Model";

export default class OrderState extends Model {
  static ENDPOINT = "order_states";

  constructor(orderState) {
    super();
    this.id = orderState.id;
    this.unremovable = orderState.unremovable;
    this.hidden = orderState.hidden;
    this.send_email = orderState.send_email;
    this.module_name = orderState.module_name;
    this.invoice = orderState.invoice;
    this.color = orderState.color;
    this.logable = orderState.logable;
    this.shipped = orderState.shipped;
    this.paid = orderState.paid;
    this.pdf_delivery = orderState.pdf_delivery;
    this.pdf_invoice = orderState.pdf_invoice;
    this.deleted = orderState.deleted;
    this.name = orderState.name;
    this.template = orderState.template;
  }

  //   unremovable	isBool	❌
  //   delivery	isBool	❌
  //   hidden	isBool	❌
  //   send_email	isBool	❌
  //   module_name	isModuleName	❌
  //   invoice	isBool	❌
  //   color	isColor	❌
  //   logable	isBool	❌
  //   shipped	isBool	❌
  //   paid	isBool	❌
  //   pdf_delivery	isBool	❌
  //   pdf_invoice	isBool	❌
  //   deleted	isBool	❌
  //   name	isGenericName	✔️	64
  //   template	isTplName	❌	64

  // add non static CRUD
}
