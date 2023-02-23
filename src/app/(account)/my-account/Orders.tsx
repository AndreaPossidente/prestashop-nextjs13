import { Order } from "@/Prestashop/models";
import Link from "next/link";

export default async function Orders({ userId }: { userId: string }) {
  const orders: Order[] = await Order.find({ id_customer: userId }).catch(
    (err) => []
  );

  return (
    <table>
      <tbody>
        {orders.length > 0 ? (
          orders.map((order) => (
            <tr key={order.id}>
              <td>{order.reference}</td>
              <td>{order.date_add.toLocaleString("it-IT")}</td>
              <td>€ {order.total_paid_tax_incl}</td>
              <td>
                <Link href={`/my-account/orders/${order.reference}`}>
                  <button>Vedi Ordine</button>
                </Link>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>There are no orders here</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
