import { useMemo, useState } from "react";
import type { Order } from "../../types";
import { formatCurrency } from "../../utils";
import { tipOptions } from "../../data";

export const OrderPayments = ({ order }: { order: Order[] }) => {
  const [propina, setPropina] = useState(0);

  const totalOrder = useMemo(
    () => order.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [order]
  );

  const totalTip = useMemo(() => totalOrder * propina, [propina, totalOrder]);
  const totalPagar = totalOrder + totalTip;

  return (
    <div className="mt-4 space-y-1">
      <div>
        <h2 className="text-lg">Seleccione el monto de la propina</h2>
        {tipOptions.map((tip) => (
          <div key={tip.id} className="flex gap-2">
            <input
              onChange={() => setPropina(tip.value)}
              type="radio"
              name="tip"
              value={tip.value}
              id={tip.id}
            />
            <label htmlFor={tip.id}>{tip.label}</label>
          </div>
        ))}
          <h3 className=" font-semibold ">
          Propina <span>{formatCurrency(totalTip)}</span>
        </h3>
        <h3 className=" font-semibold ">
          Subtotal: <span>{formatCurrency(totalOrder)}</span>
        </h3>
      </div>
      <div className="flex justify-between  py-2  bg-red-400 text-white px-4">
        <p className="font-bold">Total a Pagar:</p>
        <p className="font-bold">{formatCurrency(totalPagar)}</p>
      </div>
    </div>
  );
};
