import type { Order } from "../../types";
import { formatCurrency } from "../../utils";

export const OrderItem = ({order , removeItem}: {order: Order[] , removeItem: (item: Order) => void}) => {
  return (
    <>
      {order.map((item) => (
        <div
          key={item.id}
          className="flex justify-between border-b border-slate-800 py-2"
        >
          <p>
            {item.name}
            <span className="font-bold text-blue-500"> x {item.quantity}</span>
          </p>
          <div className="flex gap-4 items-center justify-center">
            <p className="font-bold">
              {formatCurrency(item.quantity * item.price)}
            </p>
            <button
              onClick={() => removeItem(item)}
              className="text-white bg-red-600 w-6 h-6 rounded-full  flex justify-center items-center"
            >
              x
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
