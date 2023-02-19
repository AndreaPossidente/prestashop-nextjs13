import Currency from "./Currency";
import Model from "./Model";

export default class OrderPayment extends Model {
  static ENDPOINT = "order_payments";

  id: number;
  id_currency: number;
  amount: number;
  payment_method: string;
  conversion_rate: number;
  transaction_id: string;
  card_number: string;
  card_brand: string;
  card_expiration: string;
  card_holder: string;
  date_add: Date;

  constructor(orderPayment: OrderPaymentSchema) {
    super();
    this.id = orderPayment.id;
    this.id_currency = orderPayment.id_currency;
    this.amount = Number(orderPayment.amount);
    this.payment_method = orderPayment.payment_method;
    this.conversion_rate = Number(orderPayment.conversion_rate);
    this.transaction_id = orderPayment.transaction_id;
    this.card_number = orderPayment.card_number;
    this.card_brand = orderPayment.card_brand;
    this.card_expiration = orderPayment.card_expiration;
    this.card_holder = orderPayment.card_holder;
    this.date_add = new Date(orderPayment.date_add);
  }

  async currency() {
    return await Currency.findById(this.id_currency);
  }
}
