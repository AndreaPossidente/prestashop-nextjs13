import {
  Address,
  Country,
  Currency,
  Order,
  OrderState,
} from "@/Prestashop/models";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface OrderPageProps {
  params: {
    reference: string;
  };
}

// META DATA
import type { Metadata } from "next";
import { Configuration } from "@/Prestashop/models";
/** @type {import("next").Metadata} */
export async function generateMetadata({
  params,
}: OrderPageProps): Promise<Metadata> {
  const shop: Configuration = await Configuration.findOne({
    name: "PS_SHOP_NAME",
  });
  const order: Order = await Order.findOne({
    reference: params.reference,
  }).catch((err) => null);
  return {
    title: "Order " + order.reference + " | " + shop.value,
    description: "Order page",
  };
}

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function OrderPage({ params }: OrderPageProps) {
  const session = await getServerSession(authOptions);

  const orderState: OrderState[] = await OrderState.find();
  const currencies: Currency[] = await Currency.find();
  const countries: Country[] = await Country.find();

  const order: Order = await Order.findOne({
    reference: params.reference,
  }).catch((err) => null);

  if (!session || session?.user.id !== String(order?.id_customer)) {
    notFound();
  }

  if (order === null) {
    notFound();
  }

  console.log(order);

  order.delivery_address = await Address.findOne({
    id: order.id_address_delivery,
  });

  if (order.id_address_delivery === order.id_address_invoice) {
    order.invoice_address = order.delivery_address;
  } else {
    order.invoice_address = await Address.findOne({
      id: order.id_address_invoice,
    });
  }

  return (
    <main>
      <div className="wrapper">
        <div className="breadcrumb">
          <div className="container">
            <ul>
              <li>
                <Link href={`/`}>Home</Link> /{" "}
                <Link href={`/my-account`}>My Account</Link> / Ordine:{" "}
                {order.reference}
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div>
            <h1>My Account</h1>
            <h2>Order: {order.reference}</h2>
            <hr />
            <div>
              <div style={{ marginTop: "15px" }} key={order.id}>
                <p>
                  <b>Riferimento Ordine: </b>
                  {order.reference}
                </p>
                <p>
                  <b>Data Ordine: </b>
                  {order.date_add.toLocaleString("it-IT")}
                </p>
                <p>
                  <b>Data Spedizione: </b>
                  {order.delivery_date.toLocaleString("it-IT")}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <p>
                    <b>Indirizzo di consegna: </b>
                    <br />
                    {order.delivery_address?.firstname +
                      " " +
                      order.delivery_address?.lastname}
                    <br />
                    {order.delivery_address?.address1}
                    <br />
                    {order.delivery_address?.address2 && (
                      <>
                        {order.delivery_address?.address2} <br />
                      </>
                    )}
                    {order.delivery_address?.postcode}{" "}
                    {order.delivery_address?.city}{" "}
                    {
                      countries.find(
                        (country) =>
                          country.id === order.delivery_address?.id_country
                      )?.name
                    }
                    <br />
                    {order.delivery_address?.phone_mobile}{" "}
                    {order.delivery_address?.phone}
                    <br />
                  </p>
                  <p>
                    <b>Indirizzo di spedizione: </b>
                    <br />
                    {order.invoice_address?.firstname +
                      " " +
                      order.invoice_address?.lastname}
                    <br />
                    {order.invoice_address?.address1}
                    <br />
                    {order.invoice_address?.address2 && (
                      <>
                        {order.invoice_address?.address2} <br />
                      </>
                    )}
                    {order.invoice_address?.postcode}{" "}
                    {order.invoice_address?.city}{" "}
                    {
                      countries.find(
                        (country) =>
                          country.id === order.invoice_address?.id_country
                      )?.name
                    }
                    <br />
                    {order.invoice_address?.phone_mobile}{" "}
                    {order.invoice_address?.phone}
                    <br />
                  </p>
                </div>
                <p>
                  <b>Stato Ordine: </b>
                  {
                    orderState.find((state) => state.id === order.current_state)
                      ?.name
                  }
                </p>
                <p>
                  <b>Totale Ordine: </b>
                  {
                    currencies.find(
                      (currency) => currency.id === order.id_currency
                    )?.symbol
                  }
                  {order.total_paid_tax_incl.toFixed(
                    currencies.find(
                      (currency) => currency.id === order.id_currency
                    )?.precision
                  )}
                </p>
                <div style={{ marginTop: "10px" }}>
                  <b>Dettagli Ordine</b>
                  <table>
                    <thead>
                      <tr>
                        <td>Prodotto</td>
                        <td>Quantità</td>
                        <td>Prezzo Unità (Tax Escl.)</td>
                        <td>Totale (Tax Incl.)</td>
                      </tr>
                    </thead>
                    <tbody>
                      {order.associations?.order_rows?.map((orderRow) => (
                        <tr key={orderRow.id}>
                          <td>{orderRow.product_name}</td>
                          <td>{orderRow.product_quantity}</td>
                          <td>
                            {currencies.find(
                              (currency) => currency.id === order.id_currency
                            )?.symbol +
                              " " +
                              orderRow.unit_price_tax_excl.toFixed(2)}
                          </td>
                          <td>
                            {currencies.find(
                              (currency) => currency.id === order.id_currency
                            )?.symbol +
                              " " +
                              (
                                orderRow.unit_price_tax_incl *
                                orderRow.product_quantity
                              ).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Costo Spedizione</td>
                        <td>
                          {currencies.find(
                            (currency) => currency.id === order.id_currency
                          )?.symbol +
                            " " +
                            order.total_shipping_tax_incl}
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Totale Ordine</td>
                        <td>
                          {currencies.find(
                            (currency) => currency.id === order.id_currency
                          )?.symbol +
                            " " +
                            order.total_paid}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
