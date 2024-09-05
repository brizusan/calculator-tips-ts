import type { MenuItem, Order } from "../../types";
import { OrderItem } from "./OrderItem";
import { OrderPayments } from "./OrderPayments";

interface OrderProps {
  order: Order[];
  removeItem: (item: MenuItem) => void;
  cleanOrder: () => void;
  isEmpty: boolean;
}

export const OrderMenu = ({
  order,
  removeItem,
  cleanOrder,
  isEmpty,
}: OrderProps) => {
  return (
    <div>
      <h2 className="text-center font-bold text-2xl uppercase">Orden</h2>
      <h3 className="text-lg font-light text-slate-800 text-center">
        Detalle de la orden
      </h3>
      {isEmpty ? (
        <p className="text-slate-800 text-center pt-6">
          No hay items en el carrito
        </p>
      ) : (
        <>
          <article className="border border-red-200 p-2 rounded shadow mt-6">
            <OrderItem order={order} removeItem={removeItem} />

            <OrderPayments order={order} />
            <div className="flex justify-center max-w-[400px] mx-auto pt-2">
              <button
                onClick={cleanOrder}
                className="text-center font-bold uppercase bg-blue-400 hover:bg-blue-600 text-white w-full py-2 rounded-md"
              >
                Realizar pedido
              </button>
            </div>
          </article>
        </>
      )}
    </div>
  );
};
