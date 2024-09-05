import { useMemo, useState } from "react";
import type { MenuItem, Order } from "../types";

export const useOrder = () => {
  const [order, setOrder] = useState<Order[]>([]);

  const addItem = (item: MenuItem) => {
    const existing = order.findIndex((orderItem) => orderItem.id === item.id);

    if (existing >= 0) {
      order[existing].quantity += 1;
      setOrder([...order]);
    } else {
      const pedido: Order = {
        ...item,
        quantity: 1,
      };

      setOrder([...order, pedido]);
    }
  };

  const removeItem = (item: MenuItem) => {
    const newOrder = order.filter((orderItem) => orderItem.id !== item.id);
    setOrder(newOrder);
  }

  const cleanOrder = () => {
    alert('Pedido Realizado');

    setTimeout(() => {
      setOrder([])
    }, 1500);
  }

  const isEmpty = useMemo(()=> order.length === 0 , [order])


  return { order, addItem ,removeItem , cleanOrder, isEmpty };
};
