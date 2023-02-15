import Currency from "./Currency";
import Model from "./Model";

export default class OrderPayment extends Model {
  static ENDPOINT = "order_payments";

  constructor(orderPayment) {
    super();
    this.id = orderPayment.id;
    this.id_currency = orderPayment.id_currency;
    this.amount = orderPayment.amount;
    this.payment_method = orderPayment.payment_method;
    this.conversion_rate = orderPayment.conversion_rate;
    this.transaction_id = orderPayment.transaction_id;
    this.card_number = orderPayment.card_number;
    this.card_brand = orderPayment.card_brand;
    this.card_expiration = orderPayment.card_expiration;
    this.card_holder = orderPayment.card_holder;
    this.date_add = orderPayment.date_add;
  }

  async currency() {
    return await Currency.findById(this.id_currency);
  }

  //   order_reference	isAnything	❌	9
  //   id_currency	isUnsignedId	✔️		Currency ID
  //   amount	isPrice	✔️
  //   payment_method	isGenericName	❌
  //   conversion_rate	isFloat	❌
  //   transaction_id	isAnything	❌	254
  //   card_number	isAnything	❌	254
  //   card_brand	isAnything	❌	254
  //   card_expiration	isAnything	❌	254
  //   card_holder	isAnything	❌	254
  //   date_add	isDate	❌

  // add non static CRUD
}
