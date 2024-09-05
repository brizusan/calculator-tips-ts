import { menuItems } from "../../data"
import type { MenuItem } from "../../types"
import { Item } from "./Item"

interface MenuProps {
  addItem: (item: MenuItem) => void
}

export const Menu = ({addItem} : MenuProps) => {
  return (
    
    <ul className="grid gap-2 mt-4">
    {menuItems.map((item) => (
      <Item key={item.id} item={item} addItem={addItem} />
    ))}
  </ul>
  )
}
