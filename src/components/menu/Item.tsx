import { MenuItem } from "../../types";

type ItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};
export const Item = ({ item, addItem }: ItemProps) => {
  return (
    <li
      onClick={() => addItem(item)}
      key={item.id}
      className="flex cursor-pointer bg-emerald-200 hover:bg-emerald-400  font-semibold justify-between border border-emerald-600 py-2 px-4"
    >
      <p>{item.name}</p>
      <p className="font-bold">${item.price}</p>
    </li>
  );
};
