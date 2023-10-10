import { useState } from "react";
import Item from "./Item";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 2, packed: true },
//   { id: 4, description: "Headphone", quantity: 2, packed: false },
// ];

export default function Packinglist({
  items,
  deleteItems,
  toggleItems,
  deleteList,
}) {
  const [sort, setSort] = useState("input");
  let sortedItems;
  if (sort === "input") sortedItems = items;
  if (sort === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sort === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            Item={item}
            key={item.id}
            deleteItems={deleteItems}
            toggleItems={toggleItems}
          />
        ))}
      </ul>
      <div className="action">
        <select
          style={{ height: "40px" }}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed items</option>
        </select>
        <button style={{ height: "40px" }} onClick={deleteList}>
          Clear List
        </button>
      </div>
    </div>
  );
}
